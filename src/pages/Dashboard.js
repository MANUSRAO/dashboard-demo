import React from "react";
import { Input } from "antd";

import SideNavbar from "../components/SideNavbar";
import CustomTable from "../components/CustomTable";

import styles from "../styles/Dashboard.module.css";
import { SearchOutlined, PlusCircleFilled } from "@ant-design/icons";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <SideNavbar />
      <div className={styles.mainboard}>
        <p className={styles.dashboardHeading}>Customer Profile</p>
        <Input
          className={styles.mainSearch}
          placeholder="Search Customer"
          suffix={<SearchOutlined style={{ color: "#0066FF" }} />}
        />
        <CustomTable />
        <PlusCircleFilled
          style={{
            color: "#0066FF",
            fontSize: "52px",
            position: "absolute",
            right: "2%",
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
