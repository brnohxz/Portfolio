import {alpha, makeStyles} from "@material-ui/core/styles";
import {AppBar, Avatar, Badge, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Notifications, Search} from "@material-ui/icons";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme)=>({
    largeLogo:{
        display:'block',
        [theme.breakpoints.up('sm')]:{
            display: 'block'
        }
    },
    smallLogo:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display: 'block'
        }
    },
    search:{
        [theme.breakpoints.down('sm')]:{display:'none'},
        display:'flex',
        alignItems:'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:'30%'
    },
    searchIcon:{
        marginLeft:theme.spacing(1)
    },
    toolbar:{
        display:'flex',
        justifyContent:'space-between'
    },
    searchInput:{
        color:'white',
        marginLeft:theme.spacing(1)
    },
    icons:{
        display:'flex',
        alignItems:'center'
    },
    badge:{
        marginRight:theme.spacing(2)
    }
}))

export function Navbar() {
    const classes = useStyles()

    return (
        <AppBar position={"fixed"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.largeLogo}>
                    BRNOHXZ
                </Typography>
                <div className={classes.search}>
                    <Search className={classes.searchIcon}/>
                    <InputBase placeholder={'Search...'} className={classes.searchInput}/>
                </div>
                <div className={classes.icons}>
                    <Badge badgeContent={4} color='secondary' className={classes.badge}>
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={3} color='secondary' className={classes.badge}>
                        <Notifications/>
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                </div>
            </Toolbar>
        </AppBar>
    );
}