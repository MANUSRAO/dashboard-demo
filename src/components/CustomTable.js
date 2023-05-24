import React from "react";

import CustomRow from "./CustomRow";

import styles from "../styles/CustomTable.module.css";

const CustomTable = () => {
  let data = [
    {
      key: "1",
      name: "Andrew S.",
      type: "Architect",
      zone: "Canada",
      date: "20-10-2019",
    },
    {
      key: "2",
      name: "Andrew S.",
      type: "Architect",
      zone: "Canada",
      date: "20-10-2019",
    },
    {
      key: "3",
      name: "Andrew S.",
      type: "Architect",
      zone: "Canada",
      date: "20-10-2019",
    },
    {
      key: "4",
      name: "Andrew S.",
      type: "Architect",
      zone: "Canada",
      date: "20-10-2019",
    },
  ];
  return (
    <div className={styles.mainTable}>
      <div className={styles.divHead}>
        <p className={styles.divHeadName}>Name</p>
        <p className={styles.divHeadType}>Customer Type</p>
        <p className={styles.divHeadZone}>Customer Zone</p>
        <p className={styles.divHeadDate}>Since Date</p>
      </div>
      {data.map((eachDate) => (
        <CustomRow props={eachDate} key={eachDate.key} />
      ))}
    </div>
  );
};
export default CustomTable;
