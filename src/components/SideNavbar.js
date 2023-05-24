import React from "react";
import { useState } from "react";
import { Checkbox } from "antd";
import { ConfigProvider } from "antd";

import styles from "../styles/SideNavbar.module.css";

function SideNavbar() {
  const [expanded1, setExpanded1] = useState(false);
  const [category, setCategory] = useState([
    "Granite",
    "Marble",
    "Quartz",
    "Sandstone",
  ]);
  const [expanded2, setExpanded2] = useState(false);
  const [finish, setFinish] = useState([
    "Brushed",
    "Natural",
    "Polished",
    "Silk",
  ]);
  const [filters, setFilters] = useState([]);

  let types = ["Block", "Slab"];
  let group = ["Classic", "Exotic"];

  const categoryExpander = () => {
    setExpanded1(expanded1 ? false : true);
    setCategory(
      expanded1
        ? ["Granite", "Marble", "Quartz", "Sandstone"]
        : [
            "Granite",
            "Marble",
            "Quartz",
            "Sandstone",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sde",
          ]
    );
  };
  const finishExpander = () => {
    setExpanded2(expanded2 ? false : true);
    setFinish(
      expanded2
        ? ["Brushed", "Natural", "Polished", "Silk"]
        : [
            "Brushed",
            "Natural",
            "Polished",
            "Silk",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sdsd",
            "sde",
          ]
    );
  };
  const onChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked === true) {
      if (!filters.includes(value)) {
        setFilters([...filters, value]);
      }
    } else {
      if (filters.includes(value)) {
        setFilters((prev) => {
          return prev.filter((val) => {
            return val !== value;
          });
        });
      }
    }
    console.log(`checked = ${e.target.value}`);
  };

  const clearAll = () => {
    window.location.reload();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorBgContainer: "#EEF4FD",
            colorBorder: "#757676",
            colorText: "#757676",
          },
          Input: {
            colorBgContainer: "#eef4fd",
          },
        },
      }}
    >
      <div className={styles.sidebar}>
        <div className={styles.title}>
          <p>Filters</p>
          <button className={styles.clearBtn} onClick={clearAll}>
            Clear All
          </button>
        </div>
        <div className={styles.filterGroup}>
          <p>Type</p>
          {types.map((stoneType) => {
            return (
              <Checkbox onChange={onChange} key={stoneType} value={stoneType}>
                {stoneType}
              </Checkbox>
            );
          })}
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.filterGroup}>
          <p>Category</p>
          {category.map((cat) => {
            return (
              <Checkbox onChange={onChange} key={cat} value={cat}>
                {cat}
              </Checkbox>
            );
          })}
          <button className={styles.expander} onClick={categoryExpander}>
            {!expanded1 && "+ 12 more"}
            {expanded1 && "Show less"}
          </button>
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.filterGroup}>
          <p>Finish</p>
          {finish.map((fin) => {
            return (
              <Checkbox onChange={onChange} key={fin} value={fin}>
                {fin}
              </Checkbox>
            );
          })}
          <button className={styles.expander} onClick={finishExpander}>
            {!expanded2 && "+ 12 more"}
            {expanded2 && "Show less"}
          </button>
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.filterGroup}>
          <p>Group</p>
          {group.map((grp) => {
            return (
              <Checkbox onChange={onChange} key={grp} value={grp}>
                {grp}
              </Checkbox>
            );
          })}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default SideNavbar;
