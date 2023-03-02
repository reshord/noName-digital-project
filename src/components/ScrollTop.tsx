import {useState } from "react";
import styles from '../styles/App.module.css'
import srcollToTop from '../images/content/arrowTop.png'


const ScrollTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }


    return (
        <div>
            <img onClick={() => scrollToTop()} 
                className={styles.arrowTop} 
                src={srcollToTop} 
                alt="" 
                    />
        </div>
    )
}

export default ScrollTopButton