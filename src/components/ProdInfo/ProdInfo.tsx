import React, {useEffect} from "react";
import { CardInfo } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import { productInCart, pushArr } from "../../redux/slices/productsCart";
import styles from '../../styles/ProdInfo/prodInfo.module.css'
import AuthModal from "../modals/AuthModal";
import { openAuthModal } from "../../redux/slices/auth";

const ProdInfo: React.FC = () => {
    const {allProducts, auth} = useAppSelector<RootState>(store.getState)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const addToCart = (data: CardInfo | null) => {
        if(data) {
            dispatch(pushArr(data))
            dispatch(productInCart(data.id))
        }
        return
    }

    const openAuthModalClick = () => {
        dispatch(openAuthModal(true))
    }

    useEffect(() => {
        if(!allProducts.currentInfoProd) navigate('/')
    }, [allProducts.currentInfoProd]);

    return (
        <>
        <Header />
            {auth.authModal && (
                <AuthModal />
            )}
        <div className={styles.prodInfo}>
            <div className="prodInfoImage">
                <img className={styles.prodImg} src={allProducts.currentInfoProd?.image} alt="" />
            </div>
            <div className={styles.blockInfo}>
                    <div className={styles.prodInfoHeader}>
                        <span className={styles.title}>{allProducts.currentInfoProd?.title}</span>
                        <span className={styles.description}>{allProducts.currentInfoProd?.description}</span>
                    </div>
                    <div className={styles.prodInfoFooter}>
                        <span className={styles.weight}>Вес: {allProducts.currentInfoProd?.weight} г</span>
                        <div className={styles.prodInfoPrice}>
                                {auth.isAuth ? (
                                    <button onClick={() => addToCart(allProducts.currentInfoProd)} className={styles.btn}>
                                        В корзину
                                    </button>
                                ) : (
                                    <button onClick={openAuthModalClick} className={styles.btn}>
                                        В корзину
                                    </button>
                                )}
                            <span className={styles.price}>{allProducts.currentInfoProd?.price} ₽</span>
                        </div>
                        <div>

                        </div>
                    </div>
            </div>
        </div>
        <Footer />
       </>
    )
}

export default ProdInfo