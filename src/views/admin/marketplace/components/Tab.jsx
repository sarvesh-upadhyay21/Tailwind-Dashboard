import React, { useState } from "react";
import DataTables from "views/admin/tables";
import MainDashboard from "views/admin/default";
import styles from "./tab.module.css";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div className={styles.tabContainer}>
      <ul className={styles.tabList}>
        <li
          className={`${styles.tab} ${getActiveClass(1, styles.activeTabs)}`}
          onClick={() => toggleTab(1)}
        >
          PurchaseOrderForm
        </li>
        <li
          className={`${styles.tab} ${getActiveClass(2, styles.activeTabs)}`}
          onClick={() => toggleTab(2)}
        >
          PurchaseOrderDetails
        </li>
      </ul>
      <div className={styles.contentContainer}>
        <div className={`${styles.content} ${getActiveClass(1, styles.activeContent)}`}>
          <div className="mt-5 grid grid-cols-1 gap-5">
            <MainDashboard />
          </div>
        </div>
        <div className={`${styles.content} ${getActiveClass(2, styles.activeContent)}`}>
          <DataTables />
        </div>
      </div>
    </div>
  );
};

export default Tab;
