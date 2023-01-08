import {Link, makeStyles} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiLink-root': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LinkRound2({to,children}){
    const classes = useStyles();
    return (
        <Link  component={RouterLink} to={to}>
            {children}
        </Link>
    )
}
