import React from "react";
import styles from "./Dashboard.module.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Dashboard } from "@mui/icons-material";
import { LocalFlorist } from "@mui/icons-material";
import { Extension } from "@mui/icons-material";
import { ContactSupport } from "@mui/icons-material";
import { SupportAgent } from "@mui/icons-material";
import { PowerSettingsNew } from "@mui/icons-material";
import DiscountCard from "../components/DiscountCard";
import OffersCard from "../components/OffersCard";

const DashboardPage = () => {
  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["side-nav"]}>
        <div className={styles["profile"]}>
          <div className={styles["image"]}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>VK</Avatar>
          </div>
          <div className={styles['personal-details']}>
          <p className={styles["name"]}>Vinod Kumar</p>
          <p className={styles["email"]}>vinod@gmail.com </p>
          </div>
        </div>
        <ul className={styles["side-nav-menu"]}>
          <li className={styles["side-nav-menu-items"]}>
            <Dashboard sx={{ color: "purple" }} />
            <p>Dashboard</p>
          </li>
          <li className={styles["side-nav-menu-items"]}>
            <LocalFlorist sx={{ color: "purple" }} />
            <p>Perks</p>
          </li>
          <li className={styles["side-nav-menu-items"]}>
            <Extension sx={{ color: "purple" }} />
            <p>Addons</p>
          </li>
          <li className={styles["side-nav-menu-items"]}>
            <ContactSupport sx={{ color: "purple" }} />
            <p>FAQ</p>
          </li>
          <li className={styles["side-nav-menu-items"]}>
            <SupportAgent sx={{ color: "purple" }} />
            <p>Support</p>
          </li>
        </ul>
        <div className={styles["logout"]}>
          <PowerSettingsNew />
          <p>Logout</p>
        </div>
      </div>
      <div className={styles["main-content-container"]}>
        <div className={styles["header"]}>
          <h2>Choose a plan that's just right for you !</h2>
          <div className={styles["package-selection"]}>
            <p>Monthly</p>
            <p>Annually</p>
          </div>
        </div>
        <div className={styles["first-card-section"]}>
          <DiscountCard
            heading={"Basic"}
            realPrice={2000}
            discountPrice={4000}
            btnTxt={"Get Started"}
            users={25}
            data={25}
            color={"cyan"}
          />
          <DiscountCard
            heading={"Standard"}
            realPrice={189.99}
            discountPrice={99.99}
            btnTxt={"Get Started"}
            users={50}
            data={60}
            color={"pink"}
          />
          <DiscountCard
            heading={"Premium"}
            realPrice={389.99}
            discountPrice={199.99}
            btnTxt={"Get Started"}
            users={75}
            data={100}
            color={"pink"}
          />
        </div>

        <div className={["offers-card-section"]}>
          <OffersCard
            heading={"Free Starter"}
            caption={"free forever"}
            captionBg={"gray"}
            btnTxt={"Get Started"}
            desc={
              "The quickest way to try protocols with basic functionalities"
            }
            users={8}
            data={3}
            color={"cyan"}
            features={"Basics of Documentation,Task flow,Voting"}
          />
          <OffersCard
            heading={"Enterprise Plan"}
            caption={"let's connect"}
            captionBg={"gold"}
            realPrice={2000}
            desc={"Effortless customise and fine tune services"}
            discountPrice={4000}
            btnTxt={"Contact Us"}
            users={75}
            data={25}
            color={"cyan"}
            features={"Basics of Documentation,Task flow,Voting"}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
