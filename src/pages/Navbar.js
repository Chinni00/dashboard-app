import React from 'react'
import styles from './Navbar.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className={styles['main-nav-container']}>
        <div className={styles['main-nav']}>
            <p className={styles['main-nav-items']}>XYZ Enterprises Pvt. Ltd</p>
           <p className={styles['main-nav-items']}> <KeyboardArrowDownIcon /></p>
        </div>
    </div>
  )
}

export default Navbar