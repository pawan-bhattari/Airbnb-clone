import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
        <Link to ="/">
           <img className="header__icon"
            src="https://i.pinimg.com/originals/56/78/7f/56787f4caf0c7764457a10844c45013c.jpg" alt="photo__image" />  
        </Link>
        <div className="header__center">

        <input type="text" />
    
       <SearchIcon/>
        </div>
       
       <div className="header__right"> 
         <p> Become a host</p>
         <PublicIcon/>
         <ExpandMoreIcon/>
         <Avatar/>

       </div>

      
        </div>




    )
}

export default Header
