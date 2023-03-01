import React, { useState, useEffect } from "react";
import styles from '../../styles/cart/cart.module.css'
import deleteProd from '../../images/cards/delete.png'
import { deleteProdCart } from "../../redux/slices/productsCart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { productInCart } from "../../redux/slices/productsCart";
import {updatePriceProd} from '../../redux/slices/productsCart'

type CartProdTypes = {
    image: string,
    title: string,
    description: string,
    count: number,
    price: number,
    id: number
}

const CartProd:React.FC<CartProdTypes> = ({image, title, description, count, price, id}) => {
    
    const dispatch = useAppDispatch()
    const {addProdToCart} = useAppSelector<RootState>(store.getState)
    const [countProd, setCountProd] = useState<number>(count)
    const [totalPrice, setTotalPrice] = useState<number>(price)
    const {isLoading} = addProdToCart

    

    const deleteProduct = (id: number) => {
        dispatch(deleteProdCart(id))
        dispatch(productInCart(null))
    }

    const countPlus = (id: number) => {
        setCountProd(countProd + 1)
        setTotalPrice(totalPrice + price)
        dispatch(updatePriceProd({id, totalCount: countProd + 1}))
    }

    const countMinus = (id: number) => {
        if(countProd <= 1) {
            dispatch(deleteProdCart(id))
        }
        else {
            setCountProd(countProd - 1)
            setTotalPrice(totalPrice - price)
            dispatch(updatePriceProd({id, totalCount: countProd - 1}))
        }
    }

    useEffect(() => {
        setTotalPrice(price * countProd)
    }, [count]);
    
    return (
        <div className={styles.cartProd}>
            <div className={styles.blockOne}>
                <div className="prod-img">
                    <img className={styles.prodImg} src={image} alt="" />
                </div>
                <div className={styles.prodInfo}>
                    <p>{title}</p>
                    <span>{description}</span>
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div className={styles.prodCount}>
                    <span onClick={() => countMinus(id)} className={styles.minus}>-</span>
                    <span>{countProd}</span>
                    <span onClick={() => countPlus(id)} className={styles.plus}>+</span>
                </div>
                <div className={styles.prodPrice}>
                    <span>{totalPrice}</span> ₽  
                </div>
                <div className='delete-prod'>
                    <img onClick={() => deleteProduct(id)} className={styles.deleteProd} src={deleteProd} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CartProd