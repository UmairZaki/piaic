import React from "react"
import { Link } from 'gatsby'

export default () => <header>
    
    <nav>
        <ul>
            <li>
            <Link to="/"><img src={require("./piaic.svg")} alt="" /></Link>
            </li>
            <li>
                <Link to="/howItsWork">How Its Work</Link>
            </li>
            <li>
                <Link to="/apply">Apply</Link>
            </li>
            <li>
                <Link to="/availableProgram">Avalaible Programs</Link><ul>
                    <li>
                    <Link to="/artificial_intelligence">Artificial Intelligence</Link>
                    </li>
                    <li>
                    <Link to="/cloud_native">Cloud Native</Link>
                    </li>
                    <li>
                    <Link to="/blockchain">Blockchain</Link>
                    </li>
                    <li>
                    <Link to="/internet_of_things">Internet of Things</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/about">About</Link><ul>
                    <li>
                    <Link to="/thePresident">The President</Link> 
                    </li>
                    <li>
                    <Link to="/managementComittee">Management Comittee</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/wit">WIT</Link>
            </li>
        </ul>
    </nav>
</header>