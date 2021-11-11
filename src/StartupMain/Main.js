import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import Offer from "./Sections/Offer";
import HeroSection from "./Sections/HeroSection";
import Servicings from "./Sections/Servicings";
// import SkillsPage from "./Portfolios/SkillsPage";
import SampleProject from "./Portfolios/SampleProject";
import TeamMembers from "./Members/TeamMembers";
import Pricings from "./Pricings/Pricings";
import Contacts from "./Members/Contacts";
// import Test from "./Common/Test2"
import {
  offerings,
  sampleWorks,
  teammates,
  acquantace,
  servicings,
  acomplishSection,
} from "../data";
import AcomplishSection from "./Sections/AcomplishSection";

function Main() {
  const [service, setService] = useState([]);
  const [offer, setOffer] = useState([]);
  // const [feature, setFeature] = useState([]);
  const [sample, setSample] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(teammates);
    setSample(sampleWorks);
    setService(servicings);
    setOffer(offerings);
    // setFeature(services);
  }, []);

  return (
    <Grid>
      <Navbar />
      <Header />
      <Offer feature={offer} />
      {/* <Test /> */}
      <HeroSection acquantace={acquantace} />
      {/*<Servicings servicings={service} />*/}
      {/*<AcomplishSection sector={acomplishSection} />*/}
      {/* <Dummy /> */}
      {/* <SkillsPage /> */}
      {/*<}SampleProject working={sample} />
      <TeamMembers members={members} />*/}
      {/*<Pricings />*/}
      <Contacts />
    </Grid>
  );
}

export default Main;
