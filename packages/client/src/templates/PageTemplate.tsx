import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

interface IProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: IProps) => {
  return <Content>{children}</Content>;
};

export default PageTemplate;
