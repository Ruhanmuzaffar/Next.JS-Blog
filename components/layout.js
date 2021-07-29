import LayoutStyle from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={LayoutStyle.body}>{children}</div>;
}
