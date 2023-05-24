import { React, useState } from "react";

import { Checkbox, Collapse, Divider, Modal, Table } from "antd";

import styles from "../styles/CustomRow.module.css";

import { EditOutlined } from "@ant-design/icons";
import circle from "../assets/img/circle.png";

function CustomRow({ props }) {
  const { Panel } = Collapse;
  const [clicked, setCLicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      sales: "1111",
      date: "1 July 22",
      product: "Absolute Black",
      type: "Slab",
      thickness: "2 inch",
      finish: "Premium",
      price: "60 USD",
    },
    {
      key: "2",
      sales: "1111",
      date: "1 July 22",
      product: "Absolute Black",
      type: "Slab",
      thickness: "2 inch",
      finish: "Premium",
      price: "60 USD",
    },
    {
      key: "6",
      sales: "1111",
      date: "1 July 22",
      product: "Absolute Black",
      type: "Slab",
      thickness: "2 inch",
      finish: "Premium",
      price: "60 USD",
    },
    {
      key: "7",
      sales: "1111",
      date: "1 July 22",
      product: "Absolute Black",
      type: "Slab",
      thickness: "2 inch",
      finish: "Premium",
      price: "60 USD",
    },
    {
      key: "8",
      sales: "1111",
      date: "1 July 22",
      product: "Absolute Black",
      type: "Slab",
      thickness: "2 inch",
      finish: "Premium",
      price: "60 USD",
    },
    {
      key: "9",
      sales: "1111",
      date: "1 July 22",
      product: "Absolute Black",
      type: "Slab",
      thickness: "2 inch",
      finish: "Premium",
      price: "60 USD",
    },
  ];
  const columns = [
    {
      title: "Sales Order",
      dataIndex: "sales",
      key: "sales",
    },
    {
      title: "Sales Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Product Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Thickness",
      dataIndex: "thickness",
      key: "thickness",
    },
    {
      title: "Finish",
      dataIndex: "finish",
      key: "finish",
    },
    {
      title: "Unit Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const onChange = (e) => {
    console.log(`checked = ${e.target.value}`);
  };

  const handleClick = () => {
    setCLicked(clicked ? false : true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!clicked && (
        <div className={styles.customRow}>
          <div className={styles.divName}>
            <Checkbox onChange={onChange} value={props.name}></Checkbox>
            <img src={circle} alt="Logo" className={styles.image} />
            {props.name}
          </div>
          <div className={styles.divType}>{props.type}</div>
          <div className={styles.divZone}>{props.zone}</div>
          <div className={styles.divDate}>{props.date}</div>
          <EditOutlined className={styles.edit} onClick={handleClick} />
          <button className={styles.button}>Sales History</button>
        </div>
      )}
      {clicked && (
        <div className={styles.customBlockRow}>
          <div className={styles.newCustomRow}>
            <div className={styles.newdivName}>
              <img src={circle} alt="Logo" className={styles.image} />
              <div>
                <p style={{ color: "#A2A3A5", fontSize: "10px" }}>Name</p>
                {props.name}
              </div>
            </div>
            <div className={styles.divType}>
              <p style={{ color: "#A2A3A5", fontSize: "10px" }}>
                Customer Type
              </p>
              {props.type}
            </div>
            <div className={styles.divZone}>
              <p style={{ color: "#A2A3A5", fontSize: "10px" }}>
                Customer Zone
              </p>
              {props.zone}
            </div>
            <div className={styles.divDate}>
              <p style={{ color: "#A2A3A5", fontSize: "10px" }}>Since Date</p>
              {props.date}
            </div>
            <EditOutlined className={styles.edit} onClick={handleClick} />
            <button className={styles.button} onClick={showModal}>
              Sales History
            </button>
          </div>
          <Divider style={{ marginTop: "3rem" }} />
          <div className={styles.customBlock}>
            <div className={styles.blockLeft}>
              <div className={styles.blockContact}>
                <em
                  style={{
                    fontSize: "18px",
                    fontStyle: "italics",
                    color: "#A2A3A5",
                  }}
                >
                  Contact Details
                </em>
                <div className={styles.infobox}>
                  <p className={styles.headingText}>Phone Number</p>
                  <p>+91 1232222222</p>
                </div>
                <div className={styles.infobox}>
                  <p className={styles.headingText}>Email</p>
                  <p>BBMarbles@gmail.com</p>
                </div>
              </div>
              <div className={styles.blockShipping}>
                <em
                  style={{
                    fontSize: "18px",
                    fontStyle: "italics",
                    color: "#A2A3A5",
                  }}
                >
                  Shipping Details
                </em>
                <div className={styles.infobox}>
                  <p className={styles.headingText}>Shipping Mode</p>
                  <p>Ocean, Rail and Road</p>
                </div>
                <div className={styles.infobox}>
                  <p className={styles.headingText}>Shipping Port</p>
                  <p>DPU - Delivered at Place Unloaded</p>
                </div>
              </div>
            </div>
            <div className={styles.blockRight}>
              <em
                style={{
                  fontSize: "18px",
                  fontStyle: "italics",
                  color: "#A2A3A5",
                }}
              >
                Purchasing
              </em>
              <div className={styles.blockPurchasing}>
                <div className={styles.infobox2}>
                  <p className={styles.headingText}>Currency</p>
                  <p>USD</p>
                </div>
                <div className={styles.infobox2}>
                  <p className={styles.headingText}>Payment Terms</p>
                  <p>CAD - Cash Against Documents</p>
                </div>
                <div className={styles.infobox2}>
                  <p className={styles.headingText}>Payment Method</p>
                  <p>Credit Card AMEX</p>
                </div>
                <div className={styles.infobox2}>
                  <p className={styles.headingText}>Measurement System</p>
                  <p>Imperiable</p>
                </div>
                <div className={styles.infobox2}>
                  <p className={styles.headingText}>Incoterms</p>
                  <p>DPU - Delivered at Place Unloaded</p>
                </div>
              </div>
              <em
                style={{
                  fontSize: "18px",
                  fontStyle: "italics",
                  color: "#A2A3A5",
                }}
              >
                Address Details
              </em>
              <div className={styles.blockAddress}>
                <div className={styles.infobox3}>
                  <p className={styles.headingText}>Address Line 1</p>
                  <p>Lorem ipsum lorem ipsum</p>
                </div>
                <div className={styles.infobox3}>
                  <p className={styles.headingText}>Address Line 2</p>
                  <p>Lorem ipsum lorem ipsum</p>
                </div>
                <div className={styles.infobox3}>
                  <p className={styles.headingText}>Zip code</p>
                  <p>01234</p>
                </div>
                <div className={styles.infobox3}>
                  <p className={styles.headingText}>State</p>
                  <p>Tamil Nadu</p>
                </div>
                <div className={styles.infobox3}>
                  <p className={styles.headingText}>Country</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
          <Modal
            title={props.name}
            open={isModalOpen}
            width={1000}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Divider />
            <Collapse expandIconPosition={"end"}>
              <Panel header="Sales History">
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{ hideOnSinglePage: true }}
                />
              </Panel>
            </Collapse>
          </Modal>
        </div>
      )}
    </>
  );
}

export default CustomRow;
