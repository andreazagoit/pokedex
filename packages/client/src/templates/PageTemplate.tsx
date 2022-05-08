import React from "react";
import { Layout } from "antd";
import Footer from "../organisms/Footer";
const { Content } = Layout;

interface IProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: IProps) => {
  return (
    <Content>
      {children}
      <Footer />
    </Content>
  );
};

export default PageTemplate;
