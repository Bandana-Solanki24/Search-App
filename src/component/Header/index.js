import React from 'react'
import {Link} from 'react-router-dom';
import './index.css';


function Header(){
    return(
        <div className="nav-container">
        <nav>
        <ul>
            <li>
                <Link className="nav-link" to="/">All</Link>
            </li>
            <li>
            <Link className="nav-link" to="/cakes">Cakes</Link>

            </li>
            <li>
            <Link className="nav-link" to="/chocolates">Chocolates</Link>
            </li>
            <li>
            <Link className="nav-link" to="/iceCreams">IceCreams</Link>
            </li>
            <li>
            <Link className="nav-link" to="/doughnuts">Doughnuts</Link>
            </li>
            
           </ul>
        </nav>
    </div>

        
    )
}
export default Header;