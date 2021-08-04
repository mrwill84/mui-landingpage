import React from 'react'
import {Grid} from '@material-ui/core';
import FeatureItem from '../Sections/FeatureItem'


function ProductPage({product}) {
    return (
        <Grid container justify="center" style={{minHeight:"330px"}}>
            {product.map(item =>
            <Grid item  sm={4} key={item.title}>
               <FeatureItem  title={item.title} img={item.image} descript={item.description} caption={item.caption}/>
            </Grid>
            )}
        </Grid>
    )
}

export default ProductPage
