import React from 'react'
import'./PopUp.css';


const PopUp = ({closeModal,resetForm}) => {
 
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='titleCloseBtn'> <button onClick={()=> closeModal(false)}> x</button></div>
         
        <div className='title'> <h1 >Are you Sure you want To Cancel</h1></div>
       
        {/* <div className='body'><h1> If you Cancel the vehicle is Not registered</h1></div> */}
        
        <div className='footer'>
        <button onClick={()=> closeModal(false)} id="cancelBtn"> No</button>
  
        <button type='reset' className='btn btn-light' onClick={resetForm}  id="YesBtn">Yes</button> 
        </div>
        </div>
    </div>
  )
}

export default PopUp

