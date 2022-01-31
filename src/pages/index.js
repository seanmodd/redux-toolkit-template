import styles from "src/styles/Home.module.css";
import Layout from "src/components/Layout";
import { useSelector } from "react-redux";
import Increment from "src/components/Increment";

export default function Home() {
  const user = useSelector((state) => state.value);
  const count = useSelector((state) => state.counter.value);
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <a>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
        <code className={styles.code}>{user}</code>
        <code className={styles.code}>{count}</code>
        <Increment />
      </main>
    </Layout>
  );
}
