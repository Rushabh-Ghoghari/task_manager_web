import React, { useEffect, useState } from "react";
import { FormInput } from "../input/formInput";
import styles from "./SelectFilter.module.css";
import { theme } from "antd";
import FormDropdown from "../dropdown/dropDown";

const SelectFilter = ({
  multiple = true,
  searchabar = true,
  label,
  badgeCount,
  name,
  placeholder,
  filterKey,
  items = [],
  defaultSelectedItems = [],
  selectedKeys = [],
  onSelect,
  onDeselect,
  className,
  ...props
}) => {
  const { useToken } = theme;
  const { token } = useToken();

  const [filteredItems, setFilteredItems] = useState([]);
  const [visibleItemCount, setVisibleItemCount] = useState(20);
  // const [selectedKeys, setSelectedKeys] = useState(selectedFilterKeys || []);

  useEffect(() => {
    const slicedItems = items.slice(0, 20);

    const itemsOptions = slicedItems.map((item) => ({
      key: item?.id ? item?.id : item.isoCode ? item.isoCode : item.name,
      label: item.name,
      name: item.name,
    }));

    setFilteredItems(itemsOptions);
  }, []);

  useEffect(() => {
    updateFilteredItems(items.slice(0, 20));
  }, [items]);

  useEffect(() => {
    updateFilteredItems(items.slice(0, visibleItemCount));
  }, [visibleItemCount]);

  const updateFilteredItems = (itemsToSlice) => {
    const itemsOptions = itemsToSlice.map((item) => ({
      key: item?.id ? item?.id : item.isoCode ? item.isoCode : item.name,
      label: item.name,
      name: item.name,
    }));

    setFilteredItems(itemsOptions);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop === clientHeight) {
      setVisibleItemCount((prevCount) => prevCount + 20);
    }
  };

  const handleSearchSelectFilter = (event) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(event?.target?.value?.toLowerCase())
    );

    const slicedItems = filteredItems.slice(0, 20);

    const filteredItemsAsSelect = slicedItems.map((item) => ({
      key: item.isoCode ? item.isoCode : item.name,
      label: item.name,
      name: item.name,
    }));

    setFilteredItems(filteredItemsAsSelect);
    setVisibleItemCount(20);
  };

  return (
    <FormDropdown
      label={label}
      className={
        className
          ? `${styles.filterDropdown} ${className}`
          : `${styles.filterDropdown}`
      }
      badgeCount={badgeCount}
      dropdownRender={(menu) => {
        return (
          <div
            style={{
              backgroundColor: token.colorBgElevated,
              borderRadius: token.borderRadiusLG,
              boxShadow: token.boxShadowSecondary,
            }}
          >
            {searchabar ? (
              <div style={{ padding: "5px 10px" }}>
                <FormInput
                  type="text"
                  name={name}
                  variant="borderless"
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    height: "44px",
                    marginBottom: "4px",
                  }}
                  onChange={handleSearchSelectFilter}
                />
              </div>
            ) : (
              <div style={{ padding: "5px 5px", height: 0, padding: 0 }}>
                <FormInput
                  type="text"
                  name={name}
                  variant="borderless"
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    height: "44px",
                    marginBottom: "4px",
                  }}
                  onChange={handleSearchSelectFilter}
                />
              </div>
            )}
            <div
              onScroll={handleScroll}
              style={{
                maxHeight: 200,
                overflowY: "auto",
              }}
            >
              {menu}
            </div>
          </div>
        );
      }}
      menu={{
        selectable: true,
        key: filterKey,
        multiple: multiple,
        items: filteredItems.map((item) => ({
          ...item,
          className: `${styles.menuItem}`, // Add this line
        })),
        defaultSelectedKeys: defaultSelectedItems,
        selectedKeys: selectedKeys,
        onSelect: onSelect,
        onDeselect: onDeselect,
        ...props,
      }}
    />
  );
};

export default SelectFilter;
