import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10)
    }
}))

export function Feed() {
    const classes = useStyles()

    return <Container className={classes.container}>Feed</Container>

}