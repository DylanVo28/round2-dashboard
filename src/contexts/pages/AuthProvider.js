import {createContext, useContext, useState} from "react";
import {Round2Service} from "../../services/Round2Service";
import { Redirect } from 'react-router-dom';
import {ROUTE_HOME, ROUTE_LOGIN} from "../../constants/routes";

const AuthContext=createContext()
export function AuthProvider({children}){
    const [stLogin,setStLogin]=useState({
        userName: "",
        password: ""
    })

    const [stRegister,setStRegister]=useState({
        userName: "",
        password: "",
        email: ""
    })

    const [isLogin,setIsLogin]=useState(true)
    const submitRegister=async ()=>{
        try{
            const res=await Round2Service.signUp({userName:stRegister.userName,password:stRegister.password,email:stRegister.email})
            if(res){
                return <Redirect to={ROUTE_LOGIN} push />;
            }
        }catch (e) {
            //error
        }

    }

    const submitLogin=async ()=>{
        try{
            const res=await Round2Service.login({userName:stLogin.userName,password:stLogin.password})
            if(res){
                localStorage.setItem("token",res.data)
                return <Redirect to={ROUTE_HOME} push />;
            }
        }catch (e) {
            //error
        }

    }

    return <AuthContext.Provider value={{stLogin,setStLogin,submitLogin,stRegister,setStRegister,submitRegister,isLogin,setIsLogin}}>
        {children}
    </AuthContext.Provider>
}
export function useAuthContext(){
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useLogin must be used within a AuthProvider');
    }
    return context;
}
