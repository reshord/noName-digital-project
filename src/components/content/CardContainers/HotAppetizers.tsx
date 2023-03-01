import React, { useRef, useState, useEffect, Ref } from "react";
import styles from '../../../styles/content/Content.module.css'
import Card from './Card'
import {motion} from 'framer-motion'
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import axios from 'axios'
import { CardInfo } from "../../../types/types";


type ColdCardType = {
    title: string,
    hotAppetizers: Ref<HTMLDivElement>,
}

const HotAppetizers: React.FC<ColdCardType> = React.memo(({title, hotAppetizers}) => {
    const carousel = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()
    const [offsetWidth, setOffsetWidth] = useState<number | undefined>()
    const [scrollWidth, setScrollWidth] = useState<number | undefined>()
    const {addProdToCart, allProducts} = useAppSelector<RootState>(store.getState)
    const {productsCart, isLoading} = addProdToCart 
    const getScrolltWidth = scrollWidth ? scrollWidth : 0
    const getOffsetWidth = offsetWidth ? getScrolltWidth - offsetWidth : 0

    useEffect(() => {
        setOffsetWidth(carousel.current?.offsetWidth);

        setScrollWidth(carousel.current?.scrollWidth);
        console.log(carousel.current);
        
    }, []);
    
    return (
        <div ref={hotAppetizers} className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <div className={styles.contentCards}>
                {isLoading && allProducts.products.HotAppetizers.map(el => <Card key={el.id} {...el} />)}
                
            </div>
        </div>
    )
})

export default HotAppetizers