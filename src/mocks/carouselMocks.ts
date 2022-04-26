import iphoneImage from '../assets/imgs/adsImages/iphone-ads.jpg'
import thermosImage from '../assets/imgs/adsImages/thermos-xiaomi.jpg'
import fashionImage from '../assets/imgs/adsImages/fashion-ads.jpg'
import hikingImage from '../assets/imgs/adsImages/hiking-ads.jpg'

export type carouselItemType = {
    id: number,
    title: string,
    category: string,
    itemName: string,
    description: string,
    image: string,
    show: boolean
}

export const carouselItems: carouselItemType[] = [
    {
        id:1,
        title: 'Новинка, успей купить',
        category: 'Electronics',
        itemName: 'Iphone 13  green',
        description: 'Lorem Ipsum является текст-заполнитель ' +
            'обычно используется в графических, печать и ' +
            'издательской индустрии для предварительного ' +
            'просмотра макета и визуальных макетах.',
        image: iphoneImage,
        show: true
    },
    {
        id:2,
        title: 'Собирайся в поход',
        category: 'Другое',
        itemName: 'Экипировка для хайкинка',
        description: 'Lorem Ipsum является текст-заполнитель ' +
            'обычно используется в графических, печать и ' +
            'издательской индустрии для предварительного ' +
            'просмотра макета и визуальных макетах.',
        image: hikingImage,
        show: false
    },
    {
        id:3,
        title: 'Выбери свой стиль',
        category: 'Одежда',
        itemName: 'Модный тренд',
        description: 'Lorem Ipsum является текст-заполнитель ' +
            'обычно используется в графических, печать и ' +
            'издательской индустрии для предварительного ' +
            'просмотра макета и визуальных макетах.',
        image: fashionImage,
        show:false
    },
    {
        id:4,
        title: 'Всегда с собой',
        category: 'Electronics',
        itemName: 'Термокружка Xiaomi',
        description: 'Lorem Ipsum является текст-заполнитель ' +
            'обычно используется в графических, печать и ' +
            'издательской индустрии для предварительного ' +
            'просмотра макета и визуальных макетах.',
        image: thermosImage,
        show: false
    }
]