import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleCompletedOrder } from "../../redux/slices/productsCart";
import store, { RootState } from "../../redux/store";
import styles from '../../styles/completedOrderModal/completedOrderModal.module.css'

const CompletedOrderModal = () => {

    const {addProdToCart} = useAppSelector<RootState>(store.getState)

    const completedOrder = JSON.stringify(addProdToCart.productsCart)

    const dispatch = useAppDispatch()

    const closeCompletedModal = () => {
        dispatch(toggleCompletedOrder())
    }

    return ( 
        <div className={styles.complitedOrderModal}>
            <div className={styles.complitedOrderBody}>
                <div className={styles.complitedOrderContent}>
                    <div className={styles.closeOrderModal}>
                        <span onClick={closeCompletedModal}>X</span>
                    </div>
                    <div className={styles.orderInfo}>
                        <span className={styles.yourOrder}>Ваш заказ</span>
                        <span className={styles.completedOrder}>{completedOrder}</span>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default CompletedOrderModal;