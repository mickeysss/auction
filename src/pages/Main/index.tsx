import CarouselComponent from 'components/Carousel';
import React from 'react';
import { carouselItems,carouselItemType } from '../../mocks/carouselMocks';

import styles from './styles.module.scss'

export const Main = () => {
    return (
        <div className={styles.container}>
            <CarouselComponent/>
        </div>
    );
};