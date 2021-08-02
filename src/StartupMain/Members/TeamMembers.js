import React from 'react'
import {Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Member from './Member';

const useStyles = makeStyles(()=>({
    root:{
        minHeight:"420px",
        marginTop:"3rem",
        textAlign:"center"
    },
    sampleWork:{
        display:'flex',
        flexWrap:"wrap",
        justifyContent:"center",

    },
    sampleItem:{
        display:"flex",
        margin:'5px',
        borderRadius:".25rem",
        border:"1px solid #dee2e6",
        flexDirection:"column",

    },
}));
function TeamMembers({members}) {
    const classes = useStyles();
    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
             <Grid item style={{ marginBottom:"3rem"}}>
                <Typography variant="h4"> <span className="text-info">Team</span> Members</Typography>
                <Typography variant="body2" style={{color:"#6c757d"}} >We’re some creative people with powerful knowledge & awesome skills behind the scene bringing you the bests</Typography>

            </Grid>
            <Grid className={classes.sampleWork}>
            {members.map((item,ind)=>
                <Grid item key={ind} md={2} sm={3} xs={6} className={classes.sampleItem}>
                <Member name={item.name} img={item.img} position={item.position} gmail={item.gmail} phone={item.phone}/>
                </Grid>               
                )}
                
            </Grid>
        </Grid>
    )
}

export default TeamMembers
