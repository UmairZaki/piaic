import React from "react"
import { Link } from 'gatsby'
import HeaderS from './header.module.scss'



export default () => <header >
    

    
    <nav className={HeaderS.navbar}>
    
     
        <ul >
            
            <li>
                <Link to="/howItsWork"><p>WIT</p></Link>
            </li>
            <li>
                <Link to="/apply"><p>About</p></Link>
            </li>
            <li>
                <Link  to="/availableProgram"><p>Avalaible Programs</p></Link> 
                {/* <ul className= {HeaderS.nav1}> */}
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
                {/* </ul> */}
            </li>
            <li>
                <Link to="/about"><p>Apply</p></Link>
                {/* <ul className= {HeaderS.logo}> */}

                </li>
                    {/* <li>
                    <Link className={HeaderS.link} to="/thePresident">The President</Link> 
                    </li>
                    <li>
                    <Link className={HeaderS.link} to="/managementComittee">Management Comittee</Link>
                    </li> */}
                {/* </ul> */}
            
            <li>
                <Link to="/wit"><p> How It Works</p></Link>
            </li>
        </ul>
        
    </nav>
    <div className= {HeaderS.logo}>
     <Link  to="/"  ><img src={require("./piaic.svg")} width="150" height="120"  alt="" /></Link>
    </div>
    
    
</header>