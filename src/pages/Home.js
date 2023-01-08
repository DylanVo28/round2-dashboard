import {Box} from "@mui/material";
import {useHomeContext} from "../contexts/pages/HomeProvider";
import TypographyRound2 from "../components/TypographyRound2";
import ImageRound2 from "../components/ImageRound2";

const Movie=({id,title,image,numberOfLikes,isLike})=>{
    const {likeMovie}=useHomeContext()
    return <Box>
        <TypographyRound2 variant={'h3'}>{title}</TypographyRound2>
        <ImageRound2 src={image}/>
        <TypographyRound2 variant={'p'}>
            {
                numberOfLikes
            } likes
        </TypographyRound2>
        {
            isLike && <IconLike onClick={likeMovie(id,false)}/>
        }
        {
            !isLike && <IconDisLike onClick={likeMovie(id,true)}/>
        }
    </Box>
}
export default function Home(){
    const {stMovies}=useHomeContext()
    return <Box>
        {
            stMovies.map(item=><Movie key={item.id} id={item.id}
                                      title={item.title}
                                      image={item.image} isLike={item.isLike} numberOfLikes={item.numberOfLikes}/>)
        }
    </Box>
}