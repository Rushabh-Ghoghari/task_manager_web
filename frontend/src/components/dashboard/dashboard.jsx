import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  Space,
  Tag,
  Typography,
  message,
} from "antd";
import styles from "./dashboardPage.module.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import moment from "moment";
import { ResellerIcon } from "@/src/lib/icons";
import Table from "../ui/table/table";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "@/src/store/Task/actions";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(
    window.innerWidth > 992
      ? window.innerWidth - 320
      : Math.max(window.innerWidth, 1400)
  );

  const [dimensions, setDimensions] = useState({
    windowWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    headerHeight: 0,
  });

  const formHeaderRef = useRef(null);
  const { data: tasks, isLoading } = useSelector((s) => s.tasks);
  const auth = useSelector((s) => s.auth);
  const isAdmin = auth?.user?.role === "admin";

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form] = Form.useForm();
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useLayoutEffect(() => {
    const handleResize = () => {
      // Measure header height after DOM updates
      const headerHeight = formHeaderRef.current?.clientHeight || 0;

      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setDimensions({
          windowWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          headerHeight,
        });
      });

      handleBeforePrint();
    };

    const handleBeforePrint = () => {
      if (chartRef.current) {
        const calculatedWidth =
          window.innerWidth > 992
            ? window.innerWidth - 320
            : Math.max(window.innerWidth, 1400);

        // Update chartWidth state
        setChartWidth(calculatedWidth);

        chartRef.current.resize(calculatedWidth, 284);
      }
    };

    handleResize(); // Initial measurement

    window.addEventListener("resize", handleResize);
    window.addEventListener("beforeprint", handleBeforePrint);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("beforeprint", handleBeforePrint);
    };
  }, []);

  const statusOptions = [
    { label: "Pending", value: "pending" },
    { label: "In Progress", value: "in-progress" },
    { label: "Completed", value: "completed" },
  ];

  const onAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };

  const onEdit = (record) => {
    setEditing(record);
    form.setFieldsValue({
      title: record.title,
      description: record.description,
      status: record.status,
    });
    setOpen(true);
  };

  const onDelete = async (record) => {
    try {
      setDeletingId(record._id);
      await dispatch(deleteTask(record._id)).unwrap();
      message.success("Task deleted");
    } catch (err) {
      message.error(typeof err === "string" ? err : "Failed to delete task");
    } finally {
      setDeletingId(null);
    }
  };

  const handleOk = async () => {
    const values = await form.validateFields();
    if (editing) {
      await dispatch(updateTask({ id: editing._id, body: values }));
    } else {
      await dispatch(createTask(values));
    }
    setOpen(false);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
      width: 100,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
      width: 100,
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      key: "createdOn",
      align: "center",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      width: 100,
      render: (v) => {
        const color =
          v === "completed" ? "green" : v === "in-progress" ? "blue" : "gold";
        return <Tag color={color}>{v}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button size="small" onClick={() => onEdit(record)}>
            Edit
          </Button>
          {isAdmin && (
            <Popconfirm
              title="Delete task"
              description="Are you sure to delete this task?"
              onConfirm={() => onDelete(record)}
              okButtonProps={{ loading: deletingId === record._id }}
              okText="Yes"
              cancelText="No"
            >
              <Button size="small" danger loading={deletingId === record._id}>
                Delete
              </Button>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];

  const dataSource = (tasks || []).map((item, index) => ({
    ...item,
    key: item?._id || `default_${index}`,
    title: item?.title || "-",
    description: item?.description || "-", // <- fixed here
    createdOn: item?.createdAt
      ? moment(item.createdAt).format("DD-MM-YYYY | hh:mm A")
      : "-",
    status: item?.status || "-",
  }));

  let pageHeight = dimensions?.headerHeight + 88;
  const headerContainerHeight = `calc(${`
    ${dimensions.innerHeight - pageHeight}
  `}px)`;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formHeader} ref={formHeaderRef}>
          <div className={styles.mainCard}>
            <div className={styles.headerChild}>
              <div className={styles.headerArrowText}>
                <div className={styles.headerTitle}>
                  <div>
                    <Typography className={styles.titleTypo}>
                      Dashboard
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.bodyContainer}
          style={{
            height: headerContainerHeight,
            marginTop: dimensions?.headerHeight,
          }}
        >
          <div className={styles.bodyInner}>
            <div className={styles.rightPanel}>
              <div className={styles.formWrapper}>
                <div className={styles.formDataWrapper}>
                  <div className={styles.formDataInner}>
                    <div className={styles.tableProfileContainer}>
                      <div className={styles.licenseTable}>
                        <Card
                          styles={{
                            body: {
                              padding: "20px 10px 10px 10px",
                              height: "100%",
                              width: "100%",
                            },
                          }}
                        >
                          <div className={styles.tableWrapper}>
                            <div
                              className={`${styles.textHeader} ${styles.tableHeader}`}
                            >
                              <span>Tasks</span>
                              <div>
                                <Button
                                  type="primary"
                                  size="small"
                                  onClick={onAdd}
                                >
                                  Add Task
                                </Button>
                              </div>
                            </div>
                            <div className={styles.mainTable}>
                              <div
                                className={styles.tableInner}
                                // style={{
                                //   width: getWidth(),
                                // }}
                              >
                                <Table
                                  columns={columns}
                                  bordered
                                  sticky
                                  showSorterTooltip={false}
                                  size="small"
                                  dataSource={
                                    tasks?.length > 0 ? dataSource : []
                                  }
                                  pagination={false}
                                  loading={isLoading}
                                  scroll={{
                                    x: "max-content",
                                    y:
                                      dimensions?.windowWidth > 575
                                        ? 250
                                        : null,
                                  }}
                                  style={{
                                    height: `${
                                      tasks?.length > 0
                                        ? dimensions?.windowWidth > 575
                                          ? "220px"
                                          : "auto"
                                        : "220px"
                                    }`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Task Create/Edit Modal */}
      <Modal
        title={editing ? "Edit Task" : "Add Task"}
        open={open}
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        okText={editing ? "Save" : "Create"}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input placeholder="Task title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} placeholder="Task description" />
          </Form.Item>
          <Form.Item name="status" label="Status" initialValue="pending">
            <Select
              options={[
                { label: "Pending", value: "pending" },
                { label: "In Progress", value: "in-progress" },
                { label: "Completed", value: "completed" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DashboardPage;
