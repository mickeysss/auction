import React from 'react';
import { carouselItems,carouselItemType } from '../../mocks/carouselMocks';

import styles from './styles.module.scss'

export const Main = () => {
    return (
        <div className={styles.mainContainer}>
            {carouselItems.map((carouselItem: carouselItemType) => (
                    <div className={styles.adsList}>
                        <div key={carouselItem.id} className={styles.adsItem}>
                            <h2>{carouselItem.title}</h2>
                            <div>{carouselItem.category}</div>
                            <h3>{carouselItem.itemName}</h3>
                            <p>{carouselItem.description}</p>
                            <img className={styles.adImage} src={carouselItem.image} alt="image-item"/>
                        </div>
                    </div>
                ))}
        </div>
    );
};