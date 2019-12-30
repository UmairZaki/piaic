import React from "react"
// import { Link } from 'gatsby'
import Layout from "../components/layout"
import indexS from '../components/index.module.scss'


export default () => <Layout >
    
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

    <div className={indexS.parent1}>
      <div className= {indexS.color}>
      
      <div className= {indexS.child1}>
      <p>Artificial Intelligence</p>
      </div>    
      <div className= {indexS.child2}>
      <p>Cloud Native</p>
      </div>
      <div className= {indexS.child3}>
      <p>Blockchain</p>
      </div>
      <div className= {indexS.child4}>
      <p>Internet of Things</p>
      </div>
      </div>
    </div>
    
    <div className= {indexS.line2}></div>
    
    <div className= {indexS.heading2}>
    <p>Programs in Development</p>
    </div>
    
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


