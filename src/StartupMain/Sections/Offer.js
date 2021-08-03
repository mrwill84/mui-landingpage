import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import OfferItem from './OfferItem';

function Offer({feature}) {
    return (
        <Grid container justify="center" style={{ marginTop:"5%"}} id="Services">
            <Grid item xs={12}>
                <Typography variant="h4" className="text-center">
                What We <span className="text-info">Offer</span></Typography>
                <Typography variant="body1" className="text-center">We offer our customers the best services & solutions, this is our main services list</Typography>
            </Grid>
            <Grid container>
                {feature.map(item =>
                <Grid item xs={12} sm={4} key={item.title}> 
                <OfferItem  title={item.title} img={item.image} descript={item.description}/> 
                </Grid>)}
            </Grid>
        </Grid>
    )
}

export default Offer
