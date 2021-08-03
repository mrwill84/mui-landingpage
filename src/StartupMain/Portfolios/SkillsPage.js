import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgressIcon from './CircularProgress'

const useStyles = makeStyles(()=>({
    root:{
        background:"#343a40",
        color:"#f8f9fa",
        minHeight:"380px",
        marginTop:"3rem",
        textAlign:"center"
    },
    caption:{
        color:"#6c757d",
        marginLeft:"10px"
    }
    
}))

function SkillsPage() {
    const classes = useStyles();
    return (
        <Grid container justify="center" alignItems="center" className={classes.root} id="skills">
            <Grid item>
                <Typography variant="h4">OUR POWERFUL <span className="text-info">Skill</span></Typography>
                <Typography variant="body2" style={{color:"#6c757d"}} >We're good and experienced at different things and areas and we promise about quality of our works</Typography>
            </Grid>
            
            <Grid container style={{ justifyContent:"space-evenly"}}>
                <Grid item>
                    <CircularProgressIcon num={75}/>
                    <small className={classes.caption}>Web Design</small>
                </Grid>
                <Grid item>
                    <CircularProgressIcon num={92}/>
                    <small  className={classes.caption}>Web Development</small>
                </Grid>
                <Grid item>
                    <CircularProgressIcon num={67}/>
                    <small  className={classes.caption}>Speed Optimization</small>
                </Grid>
                <Grid item>
                    <CircularProgressIcon num={100}/>
                    <small className={classes.caption}>Customer Support</small>
                </Grid>
                <Grid item>
                    <CircularProgressIcon num={83}/>
                    <small className={classes.caption}>Marketing</small>
                </Grid>
                <Grid item>
                    <CircularProgressIcon num={55}/>
                    <small  className={classes.caption}>Advertizement</small>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SkillsPage
