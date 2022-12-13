import React from 'react'
import Footer from '../Components/Footer'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'

const LandingPage = ({newData}) => {
  return (
    <div>
        <Section1/>
        <Section2 newData2={newData}/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
    </div>
  )
}

export default LandingPage