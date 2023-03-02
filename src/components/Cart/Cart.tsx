import React, {useEffect} from "react";
import styles from '../../styles/cart/cart.module.css'
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import CartProd from "./CartProd";
import { Link } from "react-router-dom";
import Arrow from '../../images/header-image/Arrow.png'
import CompletedOrderModal from "../modals/CompletedOrderModal";
import { toggleCompletedOrder } from "../../redux/slices/productsCart";

const Cart: React.FC = () => {
    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)
    const {productsCart, prodInCart} = addProdToCart

    const dispatch = useAppDispatch()

    const summProd = productsCart.reduce((acc, cur) => {
        return acc + cur.price * cur.count
    }, 0)

    const allCountProd = productsCart.reduce((acc, cur) => {
        return acc + cur.count
    }, 0)
    
    const showAllProducts = () => {
        dispatch(toggleCompletedOrder())
    }


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [prodInCart]);


    return (
        <div className={styles.cartPage}>
            <Header />
            {addProdToCart.completedOrderModal && (
                <CompletedOrderModal />
            )}

            {productsCart.length > 0 ? (
                <div className="cartWrapper">
                    <div className={styles.cart}>
                    <div className={styles.cartHeader}>
                        <img className={styles.headerArrow} src={Arrow} alt="" />
                        <Link to={'/'}>к выбору блюда</Link>
                    </div>
                    <div className={styles.cartTitle}>
                        <p>КОРЗИНА</p> 
                        <span>{productsCart.length > 0 
                        ? `(в корзине ${allCountProd} товар(-а))`
                        : '(корзина пуста)' }</span>
                    </div>
                    <div className="cart-products">
                        {productsCart.map(el => <CartProd key={el.id} {...el}/>)}
                    </div>
                </div>

                <div className={styles.cartProdSumm}>
                    <div className={styles.summ}>
                        <span>Итого: {summProd} ₽</span>
                        {summProd > 600 
                        ? <p>Доставка бесплатная</p> 
                        : <p>До бесплатной доставки не хватает: {600 - summProd} ₽</p>}
                        <p>Минимальная сумма заказа 500 ₽</p>
                    </div>
                    <div className={styles.order}>
                        <button onClick={showAllProducts} 
                                     className={styles.orderBtn}>
                                        Оформить заказ
                            </button>
                    </div>
                </div>
                </div>
            ) : (
                <div className={styles.cartIsEmpty}>КОРЗИНА ПУСТА!</div>
            )}

            <Footer />

        </div>
    )
}

export default Cart