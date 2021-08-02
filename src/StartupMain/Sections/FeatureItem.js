import React from 'react'
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    root:{
        padding:"5px 13px",
        display:"flex",
        alignItems:"center",
        marginTop:"2rem",
        marginLeft:"2rem"
    },
    image:{
        height:"2.5rem",
        marginRight:"10px",
        display:"flex",
        objectFit:"contain",
    },
   

}))

function FeatureItem({title,img,descript,caption}) {
    const classes= useStyles();
    return (
        <Grid className={classes.root}>
            <img src={img} alt="test" className={classes.image}/>
           
            <Grid>
            <Typography variant="body1">{title}</Typography>
            
            <Typography variant="body2" style={{ color:"#6c757d",fontSize:"10px",marginBottom:"1rem"}}>{caption}</Typography>

            <Typography variant="body2" style={{ color:"#6c757d",fontSize:"12px"}}>{descript}</Typography>
            </Grid>
         </Grid>
    )
}

export default FeatureItem
