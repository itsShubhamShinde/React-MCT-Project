import React from 'react'
import './SortingDetails.css'
import {Link} from 'react-router-dom'
import { Params } from 'react-router-dom'

const SortingDetails = ({type}) => {
  
  return (
    <div className='SortingDetailsOuterDiv'>
        <div className='SortingDetailsDiv'>
       
        {
            type.length === 0 ? <div>Data Not Found Plz try after Some time</div> : 
            <ul>
            {
              type.map((ele)=>{
                 return <>
                  <Link >
                    <li>{ele && ele.title}</li>
                  </Link>
                 </>
              })
            }
            </ul>
          }
               
    
        </div>
    </div>
  )
}

export default SortingDetails