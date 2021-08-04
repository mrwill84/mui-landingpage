import React from 'react'
import {Grid,makeStyles, Button,Paper} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(()=>({
    contact:{
        padding:'3rem',
        background:"#343a40",

    },
    uniqueStyle:{
        background:"#6c757d",
        padding:"3rem",
        display:"flex",
        justifyContent:"space-between",

    },
    socials:{
        display:'flex',
        justifyContent:"center",
    },
    icons:{
        height:"2rem",
        width:"2rem",
        border:"1px solid #6c757d",
        margin:".2rem",
        cursor:"pointer",
        justifyContent:"center",
        alignItems:'center',
        display:"flex",
    },
    location:{
        minHeight:"200px",
        backgroundImage:`url('./img/location.PNG')`,
        padding:"3rem",
    },
    formControl:{
        display:"block",
        width:"100%",
        padding:"5px",
        fontSize:"1rem",
        color:"#495057",
        border:"1px solid #ced4da",
        borderRadius:".25rem",
        margin:"10px 1px"

    },
    footer:{
        color:"#f8f9fa",
        paddingTop:"3rem",
        paddingBottom:"2rem",
        background:"#343a40",
        display:'flex',
        justifyContent:"center",
    }
}))
function Contacts() {
    const classes = useStyles();
    return (
        <Grid  container>
            <Grid container className={classes.uniqueStyle}>
                <h4>UNIQUE! We Do <FavoriteIcon style={{color:"#17a2b8"}}/> It And Hope You Too</h4>
                <Button variant="contained" style={{background:"#17a2b8",color:"white",padding:"9px"}} >PURCHASE NOW <AddShoppingCartIcon /></Button>
            </Grid>
            <Grid container className={classes.contact} id="Contacts">
                <Grid container style={{ color:"white",display:"flex",justifyContent:"center"}}>
                    <img src="./img/icon.png" alt="test" width="30px" height="30px" />
                    <p style={{ marginLeft:"9px"}}>Start Up</p>
                </Grid>
                <Grid container className={classes.socials}>
                    <Grid className={classes.icons}>
                    <img src="./img/facebook.png" alt="test" width="17px" height="17px"/>
                    </Grid>
                    <Grid className={classes.icons}>
                    <img src="./img/twitter.png" alt="test" width="17px" height="17px"/>
                    </Grid>
                    <Grid className={classes.icons}>
                    <img src="./img/google.png" alt="test" width="17px" height="17px"/>
                    </Grid>
                    <Grid className={classes.icons}>
                    <img src="./img/linkedin.png" alt="test" width="17px" height="17px"/>
                    </Grid>
                    <Grid className={classes.icons}>
                    <img src="./img/basketball.png" alt="test" width="17px" height="17px"/>
                    </Grid>
                    <Grid className={classes.icons}>
                    <img src="./img/vimeo.png" alt="test" width="17px" height="17px"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.location}>
               <Paper style={{padding:"3rem"}}>
               <form>
                    <input type="text" placeholder="Name..." className={classes.formControl}/>
                    <input type="email" placeholder="Email..." className={classes.formControl}/>
                    <textarea placeholder="Message" className={classes.formControl}></textarea>
                    <Button variant="contained" color="primary">Submit Message</Button>
                </form>
               </Paper>
            </Grid>
            <Grid container className={classes.footer}>
                <p>Copyright © 2019 Startup, All Right Reserved</p>
            </Grid>
        </Grid>
    )
}

export default Contacts
