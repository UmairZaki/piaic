import React from "react"
import { Link } from 'gatsby'
import HeaderS from './header.module.scss'



export default () => <header >
  

<ul className = {HeaderS.nav}>
  <li><Link><p></p></Link></li>
  <li >
  <Link to="/wit"><p>WIT</p></Link>
  </li>
  <li>
  <Link to="/about"><p>About</p></Link>
  <ul className={HeaderS.nav__sub_menu}>
  <li>
  <Link to="/thePresident"><p>The President</p></Link>
  </li>
  <li>
  <Link to="/managementComittee"><p>Management Comittee</p></Link>
  </li>
  </ul>
  </li>
  <li>
  <p>Avalaible Program</p>
  <ul className={HeaderS.nav__sub_menu}>
  <li>
  <Link to="/artificial_intelligence"><p>Artificial Intelligence</p></Link>
  </li>
  <li>
  <Link to="/cloud_native"><p>Cloud Native</p></Link>
  </li>
  <li>
  <Link to="/blockchain"><p>Blockchain</p></Link>
  </li>
  <li>
  <Link to="/internet_of_things"><p>Internet of Things</p></Link>
  </li>
  </ul>
  </li>
  <li>
  <Link to="/apply"><p>Apply</p></Link>
  </li>
  <li>
  <Link to="/howItsWork"><p>How It Works</p></Link>
  </li>
</ul>

    
    

    <div className= {HeaderS.logo}>
     <Link  to="/"  ><img src={require("./piaic.svg")} width="150" height="120"  alt="" /></Link>
    </div>
    
    
</header>