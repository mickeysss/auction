import { Gavel, Search } from '@mui/icons-material';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoBlock}>
                <div className={styles.logoOverlay}>
                    <Gavel className={styles.logoIcon}/>
                </div>
                <h1>АУКЦИОН</h1>
            </div>
            <div className={styles.navBlock}>
                <div className={styles.searchBlock}>
                    <input type="text" placeholder="Введите название товара" className={styles.searchInput}/>
                    <Search className={styles.searchIcon}/>
                </div>
                <ul className={styles.navList}>

                    <li className={styles.navItem}>
                        <NavLink to="/">
                            Главная
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/categories">Категории</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/favourites">Избранное</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};