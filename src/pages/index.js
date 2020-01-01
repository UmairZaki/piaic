import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import indexS from '../components/index.module.scss'
import pic1 from "../components/president.png"


export default () => <Layout >

    <div className= {indexS.body}>
    <div className = {indexS.title}>
    <h1>Presidential Initiative</h1>
    
    <h2>for Artificial Intelligence & Computing (PIAIC)</h2>
    
    <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
    </div>
    
    <div className= {indexS.button_padding}>
    <div>
    <p className= {indexS.button}> Apply </p>
    </div> 
    <div className= {indexS.line}> </div>
    <ul >
        <li className= {indexS.font_li}>
        65k+ 
        </li>
        <li className= {indexS.font_li2}>
        Applications Recieved
        </li>
    </ul>
    </div>
    <div className= {indexS.heading}>
    <p>Available Programs</p>
    </div>
    </div>
    

    <div className= {indexS.parent1}>
    
    <div className={indexS.parent2}>
    
      <div className= {indexS.child1}>
      <p>Artificial Intelligence</p>
      <h1>A one year Artificial Intelligence program desing for absolute beginners.
          Getting Pakistan ready for new era of computing enable by the rise of AI.</h1>
      </div>    
      <div className= {indexS.child2}>
      <p>Cloud Native</p>
      <h1>A one year Cloud Computing program desing for absolute beginners.
           Getting Pakistan ready for new era of Microservises and Multi-Cloud Native computing.</h1>
      </div>
      <div className= {indexS.child3}>
      <p>Blockchain</p>
      <h1>A one year Blockchain program desing for absolute beginners.
          Getting Pakistan ready for new era of Blockchain, Fintech and smart contracts.</h1>
      </div>
      <div className= {indexS.child4}>
      <p>Internet of Things</p>
      <h1>A fifteen months IOT & AI program desing for absolute beginners.
           Getting Pakistan ready for new era of Internet of Things and AI.</h1>
      </div>
      </div>
      </div>
      
    
      
      
      <div >
        <p className= {indexS.line2}></p>
      </div>
    
    <div className= {indexS.heading2}>
     <p>Programs in Development</p>
     </div >
  
    <div className = {indexS.parent3}>
    <div className= {indexS.box}>
     <p>SDN/NFV for 5G</p>
     </div>    
     <div className= {indexS.box}>
     <p>AUGMENTED REALITY</p>
     </div>
     <div className= {indexS.box}>
     <p>ENTREPRENEURSHIP</p>
     </div>
     <div className= {indexS.box}>
     <p>MOBILE WEB SPECIALIST</p>
     </div>
     <div className= {indexS.box}>
     <p>IOS</p>
     </div>
     <div className= {indexS.box}>
     <p>ANDROID</p>
     </div>
    </div>
    

    <div className= {indexS.parent4}>
      <div className= {indexS.heading3}>
        <p>VIDEOS</p>
      </div>

    </div>
<div className= {indexS.spotlight}>
  <div className= {indexS.image}>
    
      <img scr= {pic1} alt="kjsbdkjnb"/>
      </div>
    </div>

  





    

</Layout>


