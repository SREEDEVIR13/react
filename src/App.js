
import './App.css';
import React from 'react';
import WheelsRegistration from './Components/WheelsRegistration'
// import { Button, Form ,Input, Space, Spin} from 'antd';
// import { useState } from 'react';

// function App() {
  // const[loading, setLoading] =useState(false)
  // const {form}=Form.useForm();
  //  const onFinish = (Values)=>{
  //   //Make api call//
  //   setLoading(true)
  //   setTimeout(() => {
  //     form.resetFields();
  //     setLoading(false)
  //   }, 500 );
    
  //  };
  //  const clearForm=()=>{ 
  //   form.setFieldsValue({
  //     wheelName:"",
  //     wheelType:"",
  //     RegNum:"",
  //     SeatNum:"",

  //   })
  //  }
   
  // return (
  //   <div className="App">
      {/* <Spin spinning= {loading}>
      <h1> Add New Vehicle</h1>
      <Form onFinish={onFinish} form={form}> 
        <Form.Item label= "Wheel Name" name={"wheelName"}>
          <Input placeholder='Enter wheel name'/>

      </Form.Item>
      <Form.Item label='Wheel Type' name={'wheelType'}>
          <Input placeholder='Enter Wheel Type'/>

      </Form.Item>
      <Form.Item label='Wheel Reister Number' name={'RegNum'}>
          <Input placeholder='Enter Wheel Reister Number'/>

      </Form.Item>
      <Form.Item label='Wheel Number of seat' name={'SeatNum'}>
          <Input placeholder='Enter Wheel Number of seat'/>

      </Form.Item>
      <Space direction='horizontal' size={12}>
      <Button htmlType="submit" type="primary">Submit</Button>
      <Button htmlType="cancel"   type ="primary"   onclick={clearForm}>Cancel</Button>
      </Space>
     </Form>
      </Spin>
       */}
//     </div>
//   );
// }

function App(){
  return(
    <div className='container'>
      <WheelsRegistration/>

    </div>
  );
}
export default App;
