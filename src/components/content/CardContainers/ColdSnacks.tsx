import React, { useRef, useState, useEffect, Ref } from "react";
import styles from '../../../styles/content/Content.module.css'
import Card from './Card'
import {motion} from 'framer-motion'
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import axios from 'axios'
import { CardInfo } from "../../../types/types";


interface IColdCard {
    title: string,
    coldAppetizers: Ref<HTMLDivElement>,
}

const ColdSnacks: React.FC<IColdCard> = React.memo(({title, coldAppetizers}) => {
    const carousel = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()
    const [offsetWidth, setOffsetWidth] = useState<number | undefined>()
    const [scrollWidth, setScrollWidth] = useState<number | undefined>()
    const {addProdToCart, allProducts} = useAppSelector<RootState>(store.getState)

    useEffect(() => {
        setOffsetWidth(carousel.current?.offsetWidth);

        setScrollWidth(carousel.current?.scrollWidth);
    }, []);
    
    return (
        <div ref={coldAppetizers} className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <div className={styles.contentCards}>
                {allProducts.products.СoldSnacks.map(el => <Card key={el.id} {...el} />)}
                
            </div>
        </div>
    )
})

export default ColdSnacks