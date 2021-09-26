import {makeStyles} from "@material-ui/core/styles";
import {Container, Typography} from "@material-ui/core";
import {Home} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
        container: {
            paddingTop: theme.spacing(10),
            backgroundColor: theme.palette.primary.main,
            height: '100vh',
            color: 'white',
            [theme.breakpoints.up("sm")]: {
                backgroundColor: 'white',
                border: 'solid 1px #999',
                color: '#555555'
            },
        },
        item: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(4),
            [theme.breakpoints.up("sm")]: {
                marginBottom: theme.spacing(3),
                cursor: 'pointer'
            },
        },
        icon: {
            marginRight: theme.spacing(1),
            [theme.breakpoints.up('sm')]: {
                fontSize: '18px'
            }
        },
        text: {
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
                display: 'none'
            },

        }
    }
))

export function Leftbar() {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
        </Container>
    );
}