import {Button} from "@mui/material";

export default function ButtonRound2({type,classNames,onClick,children}){

    return (
        <Button type={type} className={classNames} onClick={(e)=>type!=='submit' ? onClick:e.preventDefault()}>
            {children}
        </Button>
        )

}