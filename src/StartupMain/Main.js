import React,{useState,useEffect} from 'react'
import {Grid} from '@material-ui/core';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import Offer from './Sections/Offer';
import FeatureList from './Sections/FeatureList';
import ProductPage from './Portfolios/ProductPage';
import SkillsPage from './Portfolios/SkillsPage';
import SampleProject from './Portfolios/SampleProject';
import TeamMembers from './Members/TeamMembers';
import Pricings from './Pricings/Pricings';
import Contacts from './Members/Contacts';
import {offerings,sampleWorks,teammates} from '../data';


function Main() {
    const [product,setProduct] = useState([]);
    const [offer,setOffer] = useState([]);
    const [feature,setFeature] = useState([]);
    const [sample,setSample] = useState([]);
    const [members,setMembers] = useState([]);

    useEffect(() => {
        const handleOffer = () =>{
            const res = offerings.filter(item => item.feature || item.offer)
            .slice(1)
             setOffer(res);
         }
         const handleFeature = () =>{
            const res = offerings.filter(item => item.feature )
             setFeature(res);
         }
         setMembers(teammates)
         setSample(sampleWorks);
         setProduct(offerings);
         handleOffer();
         handleFeature();
    }, [])
    return (
        <Grid >
            <Header />
            <Navbar />
            <Offer feature={offer}/>
            <FeatureList feature={feature}/>
            <ProductPage product={product} />
            <SkillsPage />
            <SampleProject working={sample}/>
            <TeamMembers members={members}/>
            <Pricings />
            <Contacts />
        </Grid>
      
    )
}

export default Main
