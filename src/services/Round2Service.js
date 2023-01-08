import axios from "axios";

const DOMAIN='api-dev.round2service.com.vn' || 'api-prod.round2service.com.vn'
const TOKEN='123456'
class Round2Service{

    login(body){
        const {userName,password}=body
        return axios.post(`${DOMAIN}/login`,{
            userName,password
        }).then(response=>response.data)
    }

    signUp(body){
        const {userName,password,email}=body
        return axios.post(`${DOMAIN}/users`,{
            userName,password,email
        }).then(response=>response.data)
    }

    getMovies(){
        return axios.get(`${DOMAIN}/movies`,{
            headers:{
                authorization: `Bearer ${TOKEN}`
            }
        }).then(response=>response.data)
    }

    updateMovie(id,isLike){
        return axios.put(`${DOMAIN}/movies/${id}`,{
            isLike
        },{
            headers:{
                authorization: `Bearer ${TOKEN}`
            }
        }).then(response=>response.data)
    }
}

export const Round2Service=new Round2Service()