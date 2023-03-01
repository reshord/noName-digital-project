import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeAuthModal } from '../../redux/slices/auth';
import styles from '../../styles/auth/auth.module.css'

const AuthModal = () => {

    const dispatch = useAppDispatch()

    const closeModal = () => {
        dispatch(closeAuthModal(false))
    }

    return ( 
        <div className={styles.authModal}>
            <div className={styles.authModalBody}>
                <div className={styles.authModalContent}>
                    <span onClick={closeModal} className={styles.closeAuthModal}>x</span>
                    <div className={styles.infoAuthModal}>
                        <span>
                            Чтобы добавить товар в корзину <br /> вам необходимо <Link className={styles.toAuthPage} to={'/auth'}>авторизоваться.</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AuthModal;