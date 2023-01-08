import TypographyRound2 from "../components/TypographyRound2";
import {Box} from "@mui/material";
import {useHeaderContext} from "../contexts/layouts/HeaderProvider";

export default function Header(){
    const {stUser,setStUser}=useHeaderContext()
    return <Box>
        <Box className={'bg-blue'}>
            <TypographyRound2>Welcome ({stUser.userName})</TypographyRound2>
        </Box>
    </Box>
}