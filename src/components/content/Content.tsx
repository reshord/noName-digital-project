import React, {  useEffect, useRef, useState } from "react";
import styles from '../../styles/content/Content.module.css'
import store, { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartModal from "../modals/CartModal";
import HotAppetizers from "./CardContainers/HotAppetizers";
import {motion} from 'framer-motion'
import {filterCardsPopular, filterCardsPriceLess, filterCardsPriceMore, } from '../../redux/slices/allProducts'
import { Link } from "react-router-dom";
import ColdSnacks from "./CardContainers/ColdSnacks";
import AuthModal from "../modals/AuthModal";



interface IFilter {
    type?: string
    message?: string
}

const Content = React.memo(() => {

    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)
    const dispatch = useAppDispatch()
    
    const coldAppetizers = useRef<HTMLDivElement>(null)
    const hotAppetizers = useRef<HTMLDivElement>(null)
    const meatDishes = useRef<HTMLDivElement>(null)
    const soups = useRef<HTMLDivElement>(null)
    const fishMeals = useRef<HTMLDivElement>(null)

    const streetsChoosed = useRef<HTMLDivElement>(null)
    const inputValue = useRef<HTMLInputElement>(null)

    const filterBlock = useRef<HTMLDivElement>(null)

    const [activeFilter, setActiveFilter] = useState<boolean>(false)
    const [method, setMethod] = useState<string | undefined>('популярности')

    const {cartOpen} = addProdToCart

    const sortMethods = [
        {type: 'POPULAR', message: 'популярности'},
        {type: 'PRICE_LESS', message: 'цене(от меньшего)'},
        {type: 'PRICE_MORE', message: 'цене(от большего)'},
    ]

    const blockWidth = useRef<HTMLDivElement>(null)
    
    const [offsetWidth, setOffsetWidth] = useState<number | undefined>(0)
    const [scrolltWidth, setScrolltWidth] = useState<number | undefined>(0)
    const [streets, setStreets] = useState<string[]>()
    const [value, setValue] = useState<string>('')
    const getScrollWidth = scrolltWidth ? scrolltWidth : 0
    const getWidth = offsetWidth ? getScrollWidth - offsetWidth : 0

    const filterScroll = (reference: any) => {
        window.scrollTo({
            top: reference?.current && reference.current.offsetTop - 225,
            behavior: 'smooth'
        })
    }

    const filterStreets = streets?.filter(street => {
        return street.toLowerCase().includes(value.toLowerCase())
    })

    const headerLogout = () => {
        if(auth.data) {
            const {email} = auth.data
        }
    }

    const closeAdaptiveModal = (e: React.MouseEvent) => {
        if(e.target !== streetsChoosed.current && e.target !== inputValue.current) {
            setValue('')
        }
    }

    const closeFilterMethod = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(e.target !== filterBlock.current) {
            setActiveFilter(false)
        }
        const b = 'sdfsdf'
        const a = b.replace(/\D/g, '')
    }

    const setMethodAndClose = (el: IFilter) => {
        setMethod(el.message)
        setActiveFilter(false)

        switch(el.type) {
            case 'POPULAR':
                dispatch(filterCardsPopular())
                break
            case 'PRICE_LESS':
                dispatch(filterCardsPriceLess())
                break
            case 'PRICE_MORE':
                dispatch(filterCardsPriceMore())
                break
            default: 
                return 
        }
    }

    useEffect(() => {
       
    }, []);

    return (
        <div  className={styles.content} onClick={e => closeFilterMethod(e)}>
            
            {cartOpen && (
                <CartModal  />
            )}

            {auth.authModal && (
                <AuthModal />
            )}

            {/* <NotificationProdvider /> */}
            <motion.div ref={blockWidth} className={styles.headerContent}>
                <motion.div className={styles.filterScrollSection}>
                    <span onClick={() => filterScroll(coldAppetizers)}>Холодные закуски</span>
                    <span onClick={() => filterScroll(hotAppetizers)}>Горячие закуски</span>
                </motion.div>
            </motion.div>
        <div className={styles.blockFilterOption}>
            <div className={styles.method} >
                <span  className={styles.filtered}>Сортировать по: </span>
                <span ref={filterBlock} className={styles.choosedFilter} onClick={() => setActiveFilter(!activeFilter)}>{method}</span>
            </div>
        {activeFilter && 
            <div className={styles.optionFilter}>
                {sortMethods.map(el => <span onClick={() => setMethodAndClose(el)} 
                                             className={method === el.message 
                                                        ? styles.sortMethodActive 
                                                        : styles.sortMethod}>{el.message}</span>)}
            </div>
        }
        </div>
        
            <ColdSnacks title={'Холодные закуски'} coldAppetizers={coldAppetizers}/>
            <HotAppetizers title={'Горячие закуски'} hotAppetizers={hotAppetizers}/>
        </div>
    )
})

export default Content