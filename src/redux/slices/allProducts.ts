import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo } from "../../types/types";
// import {addProducts} from '../../axios'

interface initialStateProducts {
    products: {
        СoldSnacks: CardInfo[],
        HotAppetizers: CardInfo[],
    }
    currentInfoProd: CardInfo | null
    status: string
}

const initialState: initialStateProducts = {
    products: {
        СoldSnacks: [
            {"id": 1, "image": "https://i.ibb.co/kBYBQRS/gus.png", "title": "Гусь", "count": 1, "description": "Фаршированный яблоками", "weight": "225", "price": 7900, "popular": 10},
            {"id": 2, "image": "https://i.ibb.co/NN09QJB/Ytka.png", "title": "Утка", "count": 1, "description": "Фаршированная рисом, кураго и айвой", "weight": "225", "price": 220, "popular": 12},
            {"id": 3, "image": "https://i.ibb.co/Lh6MXRS/Yagnenok.png", "title": "Ягненок", "count": 1, "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 520, "popular": 6},
            {"id": 4, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Индейка", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 5},
            {"id": 5, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Шанхайские пельмени", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 8},
            
        ],
        HotAppetizers: [
            {"id": 6, "image": "https://i.ibb.co/kBYBQRS/gus.png", "title": "Тартар из свинины", "count": 1, "description": "Фаршированный яблоками", "weight": "225", "price": 7900, "popular": 5},
            {"id": 7, "image": "https://i.ibb.co/NN09QJB/Ytka.png", "title": "Папаши из норвежского лосося", "count": 1, "description": "Фаршированная рисом, кураго и айвой", "weight": "225", "price": 220, "popular": 3},
            {"id": 8, "image": "https://i.ibb.co/Lh6MXRS/Yagnenok.png", "title": "Бриош с гуакамоле и креветками", "count": 1, "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 520, "popular": 12},
            {"id": 9, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Шаурма в лаваше с курицей", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 5},
            {"id": 10, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Венский шницель", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 8},
            
        ],
    },
    status: '',
    currentInfoProd: null
}

const allProducts = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        filterCardsPopular: (state) => {
            state.products.СoldSnacks = [...state.products.СoldSnacks.sort((a, b) => a.popular - b.popular)]
            state.products.HotAppetizers = [...state.products.HotAppetizers.sort((a, b) => a.popular - b.popular)]
        },
        filterCardsPriceLess: (state) => {
            state.products.СoldSnacks = [...state.products.СoldSnacks.sort((a, b) => a.price - b.price)]
            state.products.HotAppetizers = [...state.products.HotAppetizers.sort((a, b) => a.price - b.price)]

        },
        filterCardsPriceMore: (state) => {
            state.products.СoldSnacks = [...state.products.СoldSnacks.sort((a, b) => b.price - a.price)]
            state.products.HotAppetizers = [...state.products.HotAppetizers.sort((a, b) => b.price - a.price)]

        },
        setCurrentProd: (state, action: PayloadAction<CardInfo>) => {
            state.currentInfoProd = action.payload
        }
    },
})

export const { filterCardsPopular, filterCardsPriceLess,  filterCardsPriceMore, setCurrentProd} = allProducts.actions


export default allProducts.reducer