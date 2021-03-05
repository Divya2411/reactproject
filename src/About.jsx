import React from 'react'

import webabout from "../src/images/4.png"
import Page from "./Page"
const About = () => {
  return(
    <>
    <Page
    name = "welcome to about page" 
    imgsrc = {webabout} 
    visit = "/contact" 
    btnname = " contact now"/>
    
     </>
  )
}

export default About;