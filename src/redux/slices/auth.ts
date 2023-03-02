import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValues, IDefaultAuthUser, IGoogleAuthUser } from "../../types/types";
// import {authLogin, authRegister, logout} from '../../axios'


type AuthType = {
    isAuth: boolean
    data: null | FieldValues
    dataWithGoogleAuth: IGoogleAuthUser | null
    dataWithDefaultAuth: IDefaultAuthUser | null
    status: string
    register: boolean
    login: boolean
    logout: boolean
    type: string
    authModal: boolean
}

const initialState: AuthType = {
    isAuth: false,
    data: null,
    status: '',
    register: false,
    login: false,
    logout: false,
    type: '',
    dataWithGoogleAuth: null,
    dataWithDefaultAuth: null,
    authModal: false
}

const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setGoogleAuthUser: (state, action: PayloadAction<IGoogleAuthUser | null>) => {
            state.dataWithGoogleAuth = action.payload
            state.isAuth = true
        },
        setDefaultAuthUser: (state, action) => {
            state.dataWithDefaultAuth = action.payload
            state.isAuth = true
        },
        openAuthModal: (state, action: PayloadAction<boolean>) => {
          state.authModal = action.payload 
        },
        closeAuthModal: (state, action: PayloadAction<boolean>) => {
            state.authModal = action.payload
        },
        logoutGoogleAuthUser: (state) => {
            state.isAuth = false
            state.dataWithGoogleAuth = null
        }
    },
})

export const {
    setGoogleAuthUser,
    openAuthModal,
    closeAuthModal,
    logoutGoogleAuthUser,
    setDefaultAuthUser
} = Auth.actions
export default Auth.reducer