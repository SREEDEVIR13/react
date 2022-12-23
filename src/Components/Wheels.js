// import { Modal } from 'bootstrap';

import React ,{useState ,useEffect}from 'react'
import '../index.css';
import './Wheels.css';



import PopUp from './PopUp';
const defaultImageSrc='/img/add img icon.png'




const intialFieldValues ={
    // vehicleId:0,
    vehicleName: "",
    vehicleType:"",
    vehicleNumber:"",
    numberOfSeats:"",
    vehicleImage:"",
    vehicleOwnerId:"SYT865",
    imagesrc: defaultImageSrc,
    imageFile:null

}


export default function Wheels(props) {
    const {addOrEdit}= props
    
    const [Values ,setvalues]=useState(intialFieldValues)
    const [errors,setErrors]=useState({})


    const handleInputChange= e=>{
        const{name,value} =e.target;
        setvalues({
            ...Values,
            [name]:value

        })
      
    }
    const showPreview = e => {
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader =new FileReader();
            reader .onload= x=>{
                setvalues({
                    ...Values,
                    imageFile,
                    imagesrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)

        }
        else{
            setvalues({
                ...Values,
                imageFile:null,
                imagesrc: defaultImageSrc

            })
        }
    }
const validate =()=>{

//     const err={};
//     if(!Values.vehicleName){
//         err.vehicleName="Vehicle Name is Required";
//     }
//     if(!Values.vehicleType){
//         err.vehiclType="Vehicle Type is Required";
//     }
//     if(!Values.vehicleNumber){
//         err.vehicleNumber="Vehicle Number is Required";
//     }
//     if(!Values.numberOfSeats){
//         err.numberOfSeats="Number of seat is Required";
//     }
//     if(Values.imagesrc==defaultImageSrc){
//         err.imagesrc=" Select vehicle image"
//     }

// return err;






    let temp ={}
    temp.vehicleName = Values.vehicleName ==""?false:true;
    temp.imagesrc =Values.imagesrc==defaultImageSrc?false:true;
    setErrors(temp)
    return Object.values(temp).every(x => x==true)
}

const resetForm =()=>{
    setvalues(intialFieldValues)
    document.getElementById('image-uploader').value=null;
    setErrors({})
    setOpenModal(false);

}
   const handleFormSubmit = e => {
    e.preventDefault()
    if(validate()){
        const formData =new FormData()
        // formData.append('vehicleId',Values.vehicleId)
        formData.append('vehicleName',Values.vehicleName)
        formData.append('vehicleType',Values.vehicleType)
        formData.append('vehicleNumber',Values.vehicleNumber)
        formData.append('NumberOfSeats',Values.numberOfSeats)
        formData.append('vehicleImage',Values.vehicleImage)
        formData.append('imageFile',Values.imageFile)
        formData.append('vehicleOwnerId', Values.vehicleOwnerId)
        addOrEdit(formData,resetForm)

    }
   }
   const applyErrorClass =field =>((field in errors && errors[field]===false)?'invalid-field':'')




const[openModal,setOpenModal]=useState(false);














   return(
    <div className='Full'>
    { openModal && <PopUp resetForm={resetForm} closeModal={setOpenModal}/>}

    {/* <div className='container text-center'>
     <p className='lead'> Vehicle form</p> 
    </div> */}
    
    <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
    
        <div className='card'>
            <img src={Values.imagesrc} height="100px" width="100px" className='ImageClassRegister'/>
            <h6 className='AddVehicleClass'>Add Vehicle Image</h6>
        <div className='card-body'>
        <div className='form-group form-Input-Register ImageClassRegister'>
                <input type="file" accept= "image/*" className={"form-control-file "+applyErrorClass('imagesrc' ) }
                 onChange={showPreview} id="image-uploader"/>
                </div>
            <div className='form-group form-Input-Register'>
             <input className={"form-control"+applyErrorClass('VehicleName')} placeholder='Vehicle Name' name="vehicleName"
             value={Values.vehicleName}
             onChange={handleInputChange}/>

            </div>
            <div className='form-group form-Input-Register'>
             <input className='form-control' placeholder='Vehicle Type' name="vehicleType"
             value={Values.vehicleType}
             onChange={handleInputChange}/>

            </div>
            <div className='form-group form-Input-Register'>
             <input className='form-control' placeholder='Vehicle Number' name="vehicleNumber"
             value={Values.vehicleNumber}
             onChange={handleInputChange}/>

            </div>
            <div className='form-group form-Input-Register'>
             <input className='form-control' placeholder=' Number Of Seat' name="numberOfSeats"
             value={Values.numberOfSeats}
             onChange={handleInputChange}/>

            </div>
            <div className='form-group text-center form-btn form-Input-Register'>
                <button type='submit' className='btn btn-light submitBtn' >Submit</button>

            </div>
            {/* <div className='form-group text-center'> */}
            
       <div className='Pop-Up form-group form-Input-Register'>
                {/* <button type='reset' className='btn btn-light' onClick={() => this.resetForm()}>Cancel</button> */}
           <button className='openModalBtn'   
          onClick={()=>{
            setOpenModal(true);
          }} > 
             Cancel</button>
 
            </div>
          
        </div>
        </div>

    </form>
    </div>
  )
}
