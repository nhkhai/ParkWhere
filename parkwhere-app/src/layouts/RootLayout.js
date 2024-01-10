import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Card from "../components/Card";

import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <SideNav />
        <main className={styles.main}>
          <Card>
            <Outlet />
          </Card>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
