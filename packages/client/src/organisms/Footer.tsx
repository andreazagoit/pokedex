import { Layout } from "antd";
const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      <a
        href="https://www.linkedin.com/in/andreazagoit/"
        target="_blank"
        rel="noreferrer"
      >
        Developed by Andrea Zago
      </a>
    </AntFooter>
  );
};

export default Footer;
