import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { indianStates } from '../../Data/data';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import toast, { Toaster } from 'react-hot-toast';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dob: null,
    state: null,
    country: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    dob: false,
    state: false,
    country: false
  });
 const InitialState =
  {
    name: '',
    email: '',
    phoneNumber: '',
    dob: null,
    state: null,
    country: ''
  }
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: value.trim() === '' });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
    setErrors({ ...errors, dob: !date });
  };

  const handleStateChange = (_, value) => {
    setFormData({ ...formData, state: value });
    setErrors({ ...errors, state: !value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = true;
      }
    }
    setErrors(newErrors);

    for (const key in errors) {
      if (errors[key]) {
        setErrors({ ...errors, [key]: true });
        return;
      }
    }

    const Send = await fetch (import.meta.env.VITE_BASE_URL+'/apply',{
      method:'POST',  
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData),
    });
    console.log(Send.ok);
    if(Send.ok){
      setFormData(InitialState)
      alert('Submited successfully.');
      
    }
    else{
      alert('Unable to submit.');
    }
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='lg:w-2/3 mt-32 lg:mt-20 lg:h-[80vh] flex rounded-xl overflow-hidden shadow-xl'>
        <div className="lg:w-3/5 w-full h-full items-center justify-center flex flex-col gap-6 p-5 lg:p-10 bg-slate-100  ">
          <div className='text-3xl'>
            Just one step away from your college
          </div>
         
          <form className='w-full mt-16 flex flex-col gap-3' onSubmit={handleSubmit}>
          
            <p className=' text-left text-red-600 pl-10'>*Fill all the fields</p>
          
            <div className='flex w-[100%] lg:flex-row flex-col gap-3'>
              <TextField
                sx={{ width: '100%' }}
                id="name"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name && "Name is required"}
              />
              <TextField
                sx={{ width: '100%' }}
                id="email"
                type='email'
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email && "Email is required"}
              />
            </div>
            <div className='flex w-full lg:flex-row flex-col items-center gap-3'>
              <TextField
                sx={{ width: '100%' }}
                id="phoneNumber"
                type='number'
                label="Phone no."
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={errors.phoneNumber}
                helperText={errors.phoneNumber && "Phone number is required"}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ width: '100%' }} components={['DateField']}>
                  <DateField
                    sx={{ width: '100%' }}
                    label="Date of birth"
                    value={formData.dob}
                    onChange={handleDateChange}
                    error={errors.dob}
                    helperText={errors.dob && "Date of birth is required"}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className='flex w-full lg:flex-row flex-col gap-3'>
              <Autocomplete
                disablePortal
                id="state"
                options={indianStates}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="State" />}
                value={formData.state}
                onChange={handleStateChange}
                error={errors.state}
                helperText={errors.state && "State is required"}
              />
              <TextField
                sx={{ width: '100%' }}
                id="country"
                label="Country"
                variant="outlined"
                value={formData.country}
                onChange={handleChange}
                error={errors.country}
                helperText={errors.country && "Country is required"}
              />
            </div>
            <div className='w-full'>
              <Button sx={{ width: '100%', height: 50 }} variant="contained" type="submit">Submit</Button>
            </div>
          </form>
        </div>
        <div className='w-2/5 hidden lg:flex justify-center'>
          <img className='h-full mx-auto object-cover' src="/image/formImg.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
