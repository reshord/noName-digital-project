import React, { useEffect, Ref } from "react";
import styles from '../../../styles/content/Content.module.css'
import Card from './Card'
import { useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";

type ColdCardType = {
    title: string,
    hotAppetizers: Ref<HTMLDivElement>,
}

const HotAppetizers: React.FC<ColdCardType> = React.memo(({title, hotAppetizers}) => {

    const {allProducts} = useAppSelector<RootState>(store.getState)

    useEffect(() => {
    }, []);
    
    return (
        <div ref={hotAppetizers} className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <div className={styles.contentCards}>
                {allProducts.products.HotAppetizers.map(el => <Card key={el.id} {...el} />)}
                
            </div>
        </div>
    )
})

export default HotAppetizers