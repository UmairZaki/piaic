import React from "react"
import { Link } from 'gatsby'
import HeaderS from './header.module.scss'



export default () => <header className={HeaderS.header}>
    <div className= {HeaderS.nav1}>
     <Link  to="/"  ><img src={require("./piaic.svg")} width="150" height="120"  alt="" /></Link>
    </div>

    
    <nav >
    
     
        <ul className= {HeaderS.navbar}>
            
            <li >
                <Link className={HeaderS.link} to="/howItsWork">WIT</Link>
            </li>
            <li>
                <Link className={HeaderS.link} to="/apply">About</Link>
            </li>
            <li>
                <Link className={HeaderS.link} to="/availableProgram">Avalaible Programs</Link><ul className= {HeaderS.nav1}>
                    {/* <li>
                    <Link className={HeaderS.link} to="/artificial_intelligence">Artificial Intelligence</Link>
                    </li>
                    <li>
                    <Link className={HeaderS.link} to="/cloud_native">Cloud Native</Link>
                    </li>
                    <li>
                    <Link className={HeaderS.link} to="/blockchain">Blockchain</Link>
                    </li>
                    <li>
                    <Link className={HeaderS.link} to="/internet_of_things">Internet of Things</Link>
                    </li> */}
                </ul>
            </li>
            <li>
                <Link className={HeaderS.link} to="/about">Apply</Link><ul className= {HeaderS.nav1}>
                    {/* <li>
                    <Link className={HeaderS.link} to="/thePresident">The President</Link> 
                    </li>
                    <li>
                    <Link className={HeaderS.link} to="/managementComittee">Management Comittee</Link>
                    </li> */}
                </ul>
            </li>
            <li>
                <Link className={HeaderS.link} to="/wit">How It Works</Link>
            </li>
        </ul>
        
    </nav>
    
    
</header>