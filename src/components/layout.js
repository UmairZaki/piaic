import React from "react"
import Footer from "./footer"
import Header from "./header"
import './style/index.scss'
import layoutS from './layout.module.scss'


export default (props) => <div className= {layoutS.container}>
    <Header />
    <div className= {layoutS.content}>
     
     {props.children}
    </div>
    <Footer />
</div>

    



