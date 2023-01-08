import {createContext, useContext, useEffect, useState} from "react";
import {Round2Service} from "../../services/Round2Service";
import { Redirect } from 'react-router-dom';
import {ROUTE_HOME, ROUTE_LOGIN} from "../../constants/routes";

const HomeContext=createContext()
export function HomeProvider({children}){
    const [stMovies,setStMovies]=useState([])
    useEffect(()=>{
        const res=await Round2Service.getMovies()
        setStMovies(res.data)
    },[])

    const likeMovie=async (id,isLike)=>{
        const res=await Round2Service.updateMovie(id,isLike)
        let movies=stMovies
        movies=movies.map(item=>{
            if(item.id===res.data.id){
                return res.data
            }
            return item
        })
        setStMovies(movies)
    }
    return <HomeContext.Provider value={{stMovies,setStMovies,likeMovie}}>
        {children}
    </HomeContext.Provider>
}
export function useHomeContext(){
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error('useLogin must be used within a HomeProvider');
    }
    return context;
}
