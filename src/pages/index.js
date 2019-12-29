import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import indexS from '../components/index.module.scss'


export default () => <Layout >
  <div className = {indexS.logo}>
     
    
    <img src={require("./president.png")} width="380px" height="auto" alt="" />
    </div>
    <div className = {indexS.title}>
    <p>Presidential Initiative</p>
    </div>
    <div className = {indexS.title2}>
    <p>for Artificial Intelligence & Computing (PIAIC)</p>
    </div>
    <div className = {indexS.title3}>
    <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
    </div>
    
    
    <ul>
        <li><button type="button">Apply</button></li>
        <li>
          65k+ Applications Recieved
        </li>
    </ul>
    <h1>Available Programs</h1>
    <div class="boxed">
    <h3>Artificial Intelligence</h3>
    </div>    
    <div class="boxed">
    <h3>Cloud Native</h3>
    </div>
    <div class="boxed">
    <h3>Blockchain</h3>
    </div>
    <div class="boxed">
    <h3>Internet of Things</h3>
    </div>
    <h1>Programs in Development</h1>
    <div class="boxed">
    <h3>SDN/NFV for 5G</h3>
    </div>    
    <div class="boxed">
    <h3>AUGMENTED REALITY</h3>
    </div>
    <div class="boxed">
    <h3>ENTREPRENEURSHIP</h3>
    </div>
    <div class="boxed">
    <h3>MOBILE WEB SPECIALIST</h3>
    </div>
    <div class="boxed">
    <h3>AUGMENTED REALITY</h3>
    </div>
    <div class="boxed">
    <h3>iOS</h3>
    </div>
    <div class="boxed">
    <h3>ANDROID</h3>
    </div>
    

</Layout>


