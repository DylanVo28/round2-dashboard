
import {createContext, useContext, useEffect, useState} from "react";
import {Round2Service} from "../../services/Round2Service";


const HeaderContext=createContext()
export function HeaderProvider({children}){
    const [stUser,setStUser]=useState()
    useEffect(()=>{
        const token=localStorage.getItem("token")
        const res=await Round2Service.getMe()
        setStUser(res.data)
    },[])

    return <HeaderContext.Provider value={{stUser,setStUser}}>
        {children}
    </HeaderContext.Provider>
}
export function useHeaderContext(){
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error('useLogin must be used within a HeaderProvider');
    }
    return context;
}
