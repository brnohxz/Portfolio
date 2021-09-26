import {makeStyles} from "@material-ui/core/styles";
import {Container, Typography} from "@material-ui/core";
import {Home} from "@material-ui/icons";

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10)
    },
    item:{},
    icon:{},
    text:{}
}))

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