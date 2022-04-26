import React from 'react';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import styles from './styles.module.scss'


export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Категории</h2>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <SendTwoToneIcon className={styles.menuItemIcon}/>
                    <span>Электроника</span>
                </li>
                <li className={styles.menuItem}>
                    <SendTwoToneIcon className={styles.menuItemIcon}/>
                    <span>Одежда и обувь</span>
                </li>
                <li className={styles.menuItem}>
                    <SendTwoToneIcon className={styles.menuItemIcon}/>
                    <span>Личные вещи</span>
                </li>
                <li className={styles.menuItem}>
                    <SendTwoToneIcon className={styles.menuItemIcon}/>
                    <span>Транспорт и автозапчасти</span>
                </li>
            </ul>
        </div>
    );
};