import React from 'react'
import {Grid,Typography,Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';

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
    teamFig:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
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
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        transition:'all .5s',
        opacity:0,
        visibility:'hidden',
       
    },
    attachClip:{
        height:'1.5rem',
        width:'1.5rem',
        borderRadius:'3px',
        padding:'3px',
        transform:'rotate(45deg)',
        color:"#ac89ea",
        position:"absolute",
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        '&:hover':{
            color:'#fff',
            backgroundColor:'#000 !important',
            zIndex:'10',
        }
        },
    logoStyle:{
        width:"16px",
        height:"16px",
        transform:'rotate(-45deg)',
    },
    memName:{
        display:"inline-block",
        background:"#17a2b8",
        width:'80%',
        margin:'0 auto',
        color:"#fff",
        padding:'.4rem 1rem',
        borderRadius:'.2rem',
        transform:'translateY(-50%)',
        zIndex:"100",
        fontSize:"13px"
    },
    contact:{
        display:"flex",
        justifyContent:"space-between",
        margin:"5px 25px",
        padding:"3px",
        color:"grey",
        fontSize:"13px",
    }

}));

function Member({name,img,position,gmail,phone}) {
    const classes = useStyles();
    return (
        <>
        <figure className={classes.workFigure}>
            <img src={img} alt={name} className={classes.imgStyle} />
            <figcaption className={classes.workCaption}>
                <Grid item xs={12} className={classes.teamFig}>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"-90px"}}>
                        <img src="./img/facebook.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"-46px"}}>
                        <img src="./img/twitter.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"0px"}}>
                        <img src="./img/linkedin.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"46px"}}>
                        <img src="./img/google.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"90px"}}>
                        <img src="./img/basketball.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    <div className={classes.attachClip} style={{ background:"#fff",marginLeft:"90px"}}>
                        <img src="./img/vimeo.png" alt="test" className={classes.logoStyle}/>
                    </div>
                    
                </Grid>
                   
            </figcaption>
        </figure>
            <Typography variant="body1" className={classes.memName}>{name}</Typography>
            <Typography variant="body1" style={{ fontSize:"13px",marginBottom:"18px"}}>{position}</Typography>
            <Divider />
            <Grid className={classes.contact}>
                <MailOutlineIcon style={{ fontSize:"18px"}}/>
                <Typography variant="body1" style={{ fontSize:"13px"}}>{gmail}</Typography>
            </Grid>
            <Grid className={classes.contact}>
                <PhoneSharpIcon style={{ fontSize:"18px"}}/>
                <Typography variant="body1" style={{ fontSize:"13px"}}>{phone}</Typography>
            </Grid>
            
       
        </>
    )
}

export default Member
