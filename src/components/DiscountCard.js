import React from 'react';
import styles from './DiscountCard.module.css';
import { Person2Outlined } from '@mui/icons-material';
import { CloudOutlined } from '@mui/icons-material';
import { MailOutlined } from '@mui/icons-material';
import { ArrowRightAltOutlined } from '@mui/icons-material';


const DiscountCard = ({ heading, realPrice, discountPrice, btnTxt, users, data, color }) => {
  return (
    <div className={styles['card-component']}>
      <div className={styles['card']}>
        <h2 className={styles['card-head']}>{heading}</h2>
        <p className={styles['real-price']}>${realPrice}/mo</p>
        <p className={styles['discount-price']}>$ {discountPrice}/mo</p>
        <button className={styles['card-btn']} style={{ backgroundColor: `${color}` }}>

          {btnTxt} <ArrowRightAltOutlined />
        </button>
        <hr></hr>
        <p className={styles['side-heading']}>What you'll get:</p>
        <p className={styles['users']}>
          <Person2Outlined /> <span>Upto {users} Users</span>
        </p>
        <p className={styles['data']}>
          <CloudOutlined /><span>Upto {data}gb Storage</span>
        </p>
        <p className={styles['email']}>
          <MailOutlined /><span>Email Support</span>
        </p>
        <p className={styles['features']}>EXPLORE FEATURES </p>
      </div>
    </div>
  );
};

export default DiscountCard;
