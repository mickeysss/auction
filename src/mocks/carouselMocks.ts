import iphoneImage from '../assets/imgs/adsImages/iphone-ads.jpg'
import thermosImage from '../assets/imgs/adsImages/thermos-xiaomi.jpg'

export type carouselItemType = {
    id: number,
    title: string,
    category: string,
    itemName: string,
    description: string,
    image: string
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
        image: iphoneImage
    },
    {
        id:2,
        title: 'Супер флагман',
        category: 'Electronics',
        itemName: 'Iphone 13 Pro',
        description: 'Lorem Ipsum является текст-заполнитель ' +
            'обычно используется в графических, печать и ' +
            'издательской индустрии для предварительного ' +
            'просмотра макета и визуальных макетах.',
        image: thermosImage
    },
    {
        id:3,
        title: 'Супер флагман',
        category: 'Electronics',
        itemName: 'Iphone 13 Pro',
        description: 'Lorem Ipsum является текст-заполнитель ' +
            'обычно используется в графических, печать и ' +
            'издательской индустрии для предварительного ' +
            'просмотра макета и визуальных макетах.',
        image: thermosImage
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
        image: iphoneImage
    }
]