import React,{useState} from 'react'
import './Banner.css'
import Button from '@material-ui/core/Button';
import Search from './Search'
import { useHistory } from "react-router-dom";

function Banner() {
 const history =useHistory();
 const [showSearch,setShowsearch]=useState(false);




    return (
        <div className="banner">
            <div className='banner_search'>

            {showSearch &&<Search/> }

              <Button onClick={()=>setShowsearch(!showSearch)}
            
            className="banner_searchbottom" variant="outlined">
                {showSearch ? "Hide":" Search Dates"}
           </Button>
            
           

            </div>
           <div className='banner_info'> 
           
           <h1>Tough times never last, but tough people do </h1>

           <h4> "Love does not dominate it cultivates"</h4>
           
           <Button onClick={() => history.push('/search')}  variant="outlined">
                Explore More
        </Button>
           </div>
           
        </div>
    )
}

export default Banner
