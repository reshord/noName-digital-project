import React, { useEffect, Ref } from "react";
import styles from '../../../styles/content/Content.module.css'
import Card from './Card'
import { useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";


interface IColdCard {
    title: string,
    coldAppetizers: Ref<HTMLDivElement>,
}

const ColdSnacks: React.FC<IColdCard> = React.memo(({title, coldAppetizers}) => {
    const {allProducts} = useAppSelector<RootState>(store.getState)

    useEffect(() => {
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