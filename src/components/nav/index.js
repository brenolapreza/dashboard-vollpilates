import React from 'react';
import WrapperNav from './style'
import { Link } from 'react-router-dom'


const Nav = () =>{
    return(
        <WrapperNav>
            <ul className="dashboard">
                <li><Link to="/"><img src="https://s3.amazonaws.com/sample-login/companies/avatars/000/005/770/original/voll_logo_institucional.png?1522085458" alt="Logo-VOLL"/></Link></li>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/tabela">Item 1</Link></li>
                <li><Link to="/">Item 2</Link></li>
            </ul>
        </WrapperNav>
    )
}
export default Nav