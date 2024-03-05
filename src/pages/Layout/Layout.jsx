import { Footer } from "../../components/pagesComponents/Footer/Footer";
import { Header } from "../../components/pagesComponents/Header";
import styles from "./Layout.module.scss";

export const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};
