import React, {CSSProperties, useState} from 'react';

import { carouselItems,carouselItemType } from '../../mocks/carouselMocks';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './styles.module.scss'

import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% + 20px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    background:'transparent',
    color: 'grey',
    border: 'none'
};

const CarouselComponent = () => {
    const [showButton, setShowButton] = useState(false)

    return (
            <Carousel
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                        <ArrowCircleLeftTwoToneIcon/>
                    </button>
                )
            }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                            <ArrowCircleRightTwoToneIcon/>
                        </button>
                    )
            }
                className={styles.carousel}
                      interval={5000}
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop={true}
                      swipeable={true}
                      showArrows={true}
                      showIndicators={false}
                      autoPlay>
                {carouselItems.map((carouselItem: carouselItemType) => (
                    <>

                        <div
                            className={styles.hoverBlock}
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                        >
                            <h2>{carouselItem.title}</h2>
                            <span>{carouselItem.itemName}</span>
                            <div
                                style={{opacity: showButton ? ".8" : "1" }}
                                key={carouselItem.id}
                                className={styles.adsItem}>
                                {showButton &&
                                    <button onClick={() => console.log('clicked')}
                                            className={styles.hoverButton}
                                    >Перейти</button>
                                }
                                <img className={styles.adImage} src={carouselItem.image} alt="image-item"/>
                            </div>
                        </div >
                    </>

                ))}
            </Carousel>
    );
};

export default CarouselComponent;