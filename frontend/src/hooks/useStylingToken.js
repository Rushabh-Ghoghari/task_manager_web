import { theme } from "antd";

const { useToken } = theme;

export const useStylingToken = () => {
  const { token } = useToken();

  return token;
};
