import {makeStyles, TextField} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function TextFieldRound2({label,variant,placeholder,validates}) {
    const classes = useStyles();

    return (
                <TextField label={label} variant={variant} placeholder={placeholder}
                           validates={validates}/>
    );
}