import {makeStyles, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '20px',
        color: theme.palette.text.primary,
    },
    h1: {
        fontSize: '2.5rem',
        fontWeight: 300,
        lineHeight: '1.2',
        margin: '1.75rem 0 1.05rem',
    },
    h2: {
        fontSize: '2rem',
        fontWeight: 300,
        lineHeight: '1.2',
        margin: '1.75rem 0 1.05rem',
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: '1.2',
        margin: '1.75rem 0 1.05rem',
    },
    h4: {
        fontSize: '1.25rem',
        fontWeight: 400,
        lineHeight: '1.2',
        margin: '1.75rem 0 1.05rem',
    },
    h5: {
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: '1.2',
        margin: '1.75rem 0 1.05rem',
    },
    h6: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '1.2',
        margin: '1.75rem 0 1.05rem',
    },
    body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.5',
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.43',
    },
    caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: '1.375',
    },
    button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: '1.75',
    },
}));
export default function TypographyRound2({variant,children}){
    const classes=useStyles()
    return <Typography variant={variant} className={classes[variant]}
                       >
        {children}
    </Typography>
}