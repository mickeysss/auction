import React from 'react';
import { categoriesMenu } from 'mocks/categoriesMenu';
import styles from './styles.module.scss'



export const Categories = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Категории</h2>
            <ul className={styles.categoriesList}>
                {categoriesMenu.map((categoryItem: any) => (
                    <li className={styles.categoryItem}>
                        <img className={styles.categoryImage} src={categoryItem.img} alt="clothes-category"/>
                        <h3 className={styles.categoryTitle}>{categoryItem.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};
