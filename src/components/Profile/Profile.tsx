import Footer from "../Footer/Footer";
import Header from "../header/Header";
import styles from '../../styles/profile/profile.module.css'
import { useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileUser = () => {

    const {auth} = useAppSelector<RootState>(store.getState)

    const navigate = useNavigate()

    useEffect(() => {
        if(!auth.isAuth) navigate('/auth')
    }, [auth.isAuth]);

    return ( 
        <div className={styles.profileBody}>
            <Header />
            <div className={styles.profileContent}>
                <div className={styles.profileContentTitle}>
                    <span >Мой кабинет</span>
                </div>
                <div className={styles.profileInfoUser}>
                    <img src={`${auth.dataWithGoogleAuth?.profileImg || auth.dataWithDefaultAuth?.profileImg}`} alt="" />
                    <div className={styles.userInfo}>
                        <span className={styles.proflileUserName}>{auth.dataWithGoogleAuth?.displayName || auth.dataWithDefaultAuth?.displayName || 'Name is not exist'}</span>
                        <span className={styles.proflileUserEmail}>{auth.dataWithGoogleAuth?.email || auth.dataWithDefaultAuth?.email}</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileUser;