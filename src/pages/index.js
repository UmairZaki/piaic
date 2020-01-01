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
    <a href="https://portal.piaic.org/signup" target="_blank"><p className= {indexS.button}> Apply </p></a>
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
    
      <div className= {indexS.child1} onClickCapture href ="/artifitial_intelligence">
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
    

    <div className={indexS.parent4}>
    <div className={indexS.heading3}>
      <h3 className = {indexS.vidhead}>VIDEOS</h3>
      <div className= {indexS.videos}>
      <div>
      <div className={indexS.videobox}>
        <iframe frameborder="0" className={indexS.play} allow="accelerometer; autoplay; encrypted-media; gyroscope;
         picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/_rUQ301EJAo">
      </iframe>
      </div>
      <div className = {indexS.vidlistbox}>
        <div class="PresidentSays-video-list">
          <ul className={indexS.vidllist}>
            <li className={indexS.vidobject} >
              <div class="PresidentSaysVideo-video-list-flexbox">
              <div className={indexS.testing} ></div>
                <div className={indexS.presidentSays}></div>
                <div class="PresidentSays-video-list-content ">
                  <h4 class="PresidentSaysVideo-video-list-onVideo">
                    PIAIC Classes Coming Soon!</h4>
                  <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.</p>
                </div>
              </div>
            </li>
            <li className={indexS.vidobject} >
              <div class="PresidentSaysVideo-video-list-flexbox">
              <div className={indexS.presidentSays}></div>
                <div class="PresidentSays-video-list-content ">
                  <h4 class="">Teaser 2: PIAIC Classes Coming Soon</h4>
                  <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.</p>
                  </div>
                  </div>
                  </li>
                  <li className={indexS.vidobject} >
                    <div class="PresidentSaysVideo-video-list-flexbox">
                    <div className={indexS.presidentSays}></div>
                      <div class="PresidentSays-video-list-content ">
                        <h4 class="">PIAIC Intro - Full Version</h4>
                        <p>Official intro video of the PIAIC. Messages from President Dr. Arif Alvi, Kazi Rahat Ali, Hunaid Lakhani, Sulaiman S. Mehdi, and Zia Ullah Khan.</p>
                        </div>
                        </div>
                        </li>
                        <li className={indexS.vidobject} >
                                  <div class="PresidentSaysVideo-video-list-flexbox">
                                  <div className={indexS.presidentSays}></div>
                                    <div class="PresidentSays-video-list-content ">
                                      <h4 class="">PTV Coverage of PIAIC Entry Test</h4>
                                      <p>PTV News coverage of 1st Entrance Exam of the PIAIC in Karachi</p>
                                      </div>
                                      </div>
                                      </li>
                                      <li className={indexS.vidobject} >
                                        <div class="PresidentSaysVideo-video-list-flexbox">
                                        <div className={indexS.presidentSays}></div>
                                          <div class="PresidentSays-video-list-content ">
                                            <h4 class="">PIAIC Launch - President Arif Alvi Address</h4>
                                            <p>Presidential address at the launch of the Presidential Initiative for Artificial Intelligence and Computing on December 9, 2018.</p>
                                            </div>
                                            </div>
                                            </li>
                                            <li className={indexS.vidobject} >
                                              <div class="PresidentSaysVideo-video-list-flexbox">
                                              <div className={indexS.presidentSays}></div>
                                                <div class="PresidentSays-video-list-content ">
                                                  <h4 class="">Zia Khan Interview on Bol News</h4>
                                                 <p>Published on Dec 31, 2018</p>
                                                  </div>
                                                  </div>
                                                  </li>
                                                  <li className={indexS.vidobject} >
                  <div class="PresidentSaysVideo-video-list-flexbox">
                  <div className={indexS.presidentSays}></div>
                    <div class="PresidentSays-video-list-content ">
                  <h4 class="">PTV Coverage of PIAIC Launch Event</h4>
                  <p>PTV Coverage of PIAIC Launch Event on December 9, 2018</p>
                </div>
              </div>
            </li>
            <li className={indexS.vidobject} >
              <div class="PresidentSaysVideo-video-list-flexbox">
              <div className={indexS.presidentSays}></div>
                <div class="PresidentSays-video-list-content ">
                <h4 class="">LIVE: President of Pakistan Dr Arif Alvi's exclusive interview with Nadeem Malik, October 29, 2018</h4>
                <p>Streamed live on Oct 29, 2018</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  
  <div className={indexS.spotlight}>
    <div className={indexS.image}>

      <img scr={require("./president.png")} height="100px" width='auto'
        alt="kjsbdkjnb" />
    </div>
  </div>

</Layout>


