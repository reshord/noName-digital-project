import React, { useEffect, useState, useRef } from "react";
import Location from '../../images/header-image/Location.png'
import Calling from '../../images/header-image/Calling.png'
import Search from '../../images/header-image/Search.png'
import styles from '../../styles/header/header.module.css'
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { cartModal } from "../../redux/slices/productsCart";
import Profile from '../../images/header-image/Profile.png'
import cartMedia from '../../images/cards/Buy.png'
import { logoutGoogleAuthUser } from "../../redux/slices/auth";

const Header = () => {
    const dispatch = useAppDispatch()
    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)

        /* State */
    const {productsCart, prodInCart, isLoading, cartOpen} = addProdToCart
    const {isAuth, data} = auth
        /* State */

        /* Hooks */
    const [value, setValue] = useState<string>('')
    const [streets, setStreets] = useState<string[]>([])
    const [onInput, setOnInput] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(true)
    const refHeaderInput = useRef<HTMLInputElement>(null)
    const refHeaderStreet = useRef<HTMLDivElement>(null)
        /* Hooks */


    const cartEmpty = () => {
        dispatch(cartModal(true))
    }

    const headerLogout = () => {
        dispatch(logoutGoogleAuthUser())
    }

    const filterStreets = streets.filter(street => {
        return street.toLowerCase().includes(value.toLowerCase())
    })

    const allCountProd = productsCart.reduce((acc, cur) => {
        return acc + cur.count
    }, 0)

    // const openMobileModal = () => {
    //     dispatch(activeAdaptiveModal())
    // }

    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">
                <Link to={'/'} className={styles.logoName}>SHOP</Link>
            </div>
            {productsCart.length > 0 
            ? <Link to={'/cart'}>
                <div className={styles.cartMedia}>
                    <img className={styles.cartMediaImg} src={cartMedia} alt="" />
                    <span>Корзина</span>
                </div>
            </Link> 
            : <div className={styles.cartMedia} onClick={() => cartEmpty()}>
                    <img className={styles.cartMediaImg} src={cartMedia} alt="" />
                    <span>Корзина</span>
                </div>}

            <div className={styles.blockCartAuth}>
                <div className={styles.auth}>
                    <img className={styles.authImg} src={Profile} alt="" />
                    {auth.isAuth 
                        ? <span onClick={() => headerLogout()}>Выйти</span> 
                        : <Link to={'/auth'}><span>Вход / Регистрация</span></Link>}
                </div>
                        <Link to={'/cart'}>
                            <div className={styles.cart}>
                                <b>Корзина</b>
                                <span className={styles.cartCounter}>{allCountProd}</span>
                            </div>
                        </Link>
            </div>
        </div>
    )
}

export default Header