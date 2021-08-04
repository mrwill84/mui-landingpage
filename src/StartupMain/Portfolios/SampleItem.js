import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles(()=>({
    
    imgStyle:{
        objectFit:"contain",
        height:"100%",
        borderRadius:".5rem",
        width:"100%",
    },
    workFigure:{
        position:"relative",
        textAlign:"center",
        color:"#fff",
        overflow:"hidden",
        cursor:"pointer",
        margin:"0",
        '&:hover figcaption':{
            transform: 'translateY(0%)',
            visibility:'visible',
            opacity:1,
        }
    },
    workCaption:{
        position:"absolute",
        top:'0',
        left:'0',
        transform:'translateY(50%)',
        width:'100%',
        height:'100%',
        background:'#17a2bb',
        display:"flex",
        transition:'all .5s',
        opacity:0,
        visibility:'hidden',
       
    },

    attachClip:{
        height:'1.8rem',
        width:'1.8rem',
        borderRadius:'3px',
        transform:'rotate(45deg)',
        color:"#ac89ea",
        marginLeft:"40%",
        marginTop:"36px",
        position:"absolute",
       
        },

}));
function SampleItem({title,img,star}) {
    const classes = useStyles();
    return (
        <>
            <figure className={classes.workFigure}>
            <img src={img} alt={title} className={classes.imgStyle}/>
            <figcaption className={classes.workCaption}>
                <Grid container>
                <Grid item xs={12}>
                    <div className={classes.attachClip} style={{ background:"#fff"}}>
                        <AttachFileIcon style={{fontSize:"17px"}}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#333",marginLeft:"53%"}}>
                        <SearchIcon style={{fontSize:"17px"}}/>
                    </div>
                </Grid>
                    <Grid item xs={12} style={{ marginTop:"35px",fontSize:"10px",}}>
                        <Typography variant="body1" style={{ fontSize:"12px"}}>{title}</Typography>
                        <Typography variant="caption" style={{ fontSize:"10px"}}>Illustration/Print</Typography>
                        <div className={classes.loveIcon}>
                        <FavoriteIcon fontSize="small" style={{fontSize:"17px"}}/>{star}</div>
                    </Grid>
                </Grid>
            </figcaption>
            </figure>
        </>
    )
}

export default SampleItem
