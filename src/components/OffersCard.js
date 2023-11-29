import React from "react";
import styles from "./OffersCard.module.css";
import { Person2Outlined } from "@mui/icons-material";
import { CloudOutlined } from "@mui/icons-material";
import { MailOutlined } from "@mui/icons-material";
import { ArrowRightAltOutlined } from "@mui/icons-material";


const OffersCard = ({
  heading,
 caption,
 captionBg,
  btnTxt,
  users,
  data,
  color,
  features,
  desc,
}) => {
  return (
    <div className={styles["card-component"]}>
      <div className={styles["card"]}>
        <div className={styles["left"]}>
          <p className={styles['caption']} style={{backgroundColor:captionBg}} >{caption}</p>
          <h2 className={styles["card-head"]}>{heading}</h2>
          <p className={styles["desc"]}>{desc}</p>
          <button
            className={styles["card-btn"]}
            style={{ backgroundColor: `${color}` }}
          >
            {btnTxt} <ArrowRightAltOutlined />
          </button>
        </div>
        <div className={["right"]}>
          <p className={styles["side-heading"]}>What you'll get:</p>
          <p className={styles["users"]}>
            <Person2Outlined /> <span>Upto {users} Users</span>
          </p>
          <p className={styles["data"]}>
            <CloudOutlined />
            <span>Upto {data}gb Storage</span>
          </p>
          <p className={styles["email"]}>
            <MailOutlined />
            <span>Email Support</span>
          </p>
          <p className={styles["features"]}>{features} </p>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
