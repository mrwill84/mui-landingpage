import React from 'react'
import {Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FeatureItem from './FeatureItem';

const useStyles = makeStyles(()=>({
    root:{
        background:"#343a40",
        minHeight:"500px",
        padding:"4rem 0",
        color:"#f8f9fa",
    },
    feature:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    imageRoot:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"10px",
        marginTop:"3rem"
    },
    featureImage:{
        maxWidth:"85%",
        borderRadius:".5rem",
        height:"auto",
    }
}))

function FeatureList({feature}) {
    const classes= useStyles();
    
    return (
        <Grid container justify="center" className={classes.root}>
            <Grid item>
                <Typography variant="h4" className="text-center">AMAZING <span className="text-info">FEATURES</span></Typography>

                <Typography variant="body2" style={{ color:"#6c757d"}}>With unlimited features that we offer, we promise it's possible to make everything that was impossible for you !</Typography>
            </Grid>

            <Grid item className={classes.feature} sm={6}>
            {feature.map(item =>
            <Grid item key={item.title}>
               <FeatureItem  title={item.title} img={item.image} descript={item.description}/>
            </Grid>
            )}
            </Grid>
            
            <Grid item sm={6} className={classes.imageRoot}>
                <img src="./img/devices.png" alt="test" className={classes.featureImage}/>
            </Grid>

        </Grid>
    )
}

export default FeatureList
