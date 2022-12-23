// import React, {usestate}from 'react';
// import axios from "axios";

// function WheelsRegistration()  {
//      const url=""
//      const[data ,setData]= usestate({
//          WheelName:"",
//          WheelType:"",
//          WheelRegNumber:"",
//          WheelNumOfseat:""
//      })
//     function handle(e){
//         const newdata={...data}
//         newdata[e.target.id]=e.target.value
//         setData(newdata)
//         console.log(newdata)

//     }
//   return (
//     <div>
//         <form>
//         <input  onChange={(e)=>handle(e)} id="wheelName" value= {data.WheelName} placeholder='WheelName' type="text"></input>
//         <input onChange={(e)=>handle(e)} id="wheelType" value= {data.WheelType} placeholder='WheelType' type="text"></input>
//         <input onChange={(e)=>handle(e)} id="wheelRegNumber" value= {data.WheelRegNumber} placeholder='WheelRegNumber' type="text"></input>
//         <input  onChange={(e)=>handle(e)} id="wheelNumOfSeat" value= {data.WheelNumOfSeat} placeholder='WheelNumOfseat' type="number"></input>
//         </form>
//     </div>
    //  <div>
    //  <form>
    //  <input   placeholder='WheelName' type="text"></input>
    //  <input placeholder='WheelType' type="text"></input>
    //  <input placeholder='WheelRegNumber' type="text"></input>
    //  <input  placeholder='WheelNumOfseat' type="number"></input>
    //  </form>
//  </div>
//   );













// 


import React from 'react'
import Wheels from './Wheels'
import axios from 'axios';

export default function WheelsRegistration() {
    const WheelAPI =(url='localhost:7149/api/Vehicle/register') => {
        return {
            fetchAll:()=> axios.get(url),
            create: newRecords => axios.post(url,newRecords),
            Update: (id, UpdatedRecord)=>axios.put(url +id, UpdatedRecord),
            delete:id =>axios.delete(url+id)
        }
    }
    const addOrEdit =(FormData,onSuccess) =>{
      WheelAPI().create(FormData)
      .then(res=> {
        onSuccess();
      })
      .catch(err => console.log(err))

    }
  return (
    // <div className='row'>
        <div className='col-md-12'>

        <div className="jumbotron jumbotron-fluid py-4">
  <div className="container text-center" >
    <h1 className="display-4">Add New Vehicle</h1>

  {/* </div> */}
</div>
        </div>
        <div className="col-md-12">
            <Wheels
            addOrEdit={addOrEdit}/>
            </div>
            {/* <div className="col-md-8">
            <div> list of Vehicle registered</div>
            </div> */}
    </div>
  )
}







      
   
