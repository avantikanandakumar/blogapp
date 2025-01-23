import { Box, Button, Grid2, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Addblog = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    ImageURL: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const location=useLocation();
const navigate=useNavigate();

  const handleSubmit = async () => {
    if(location.state!=null){
      axiosInstance.put('/blogapplication/updateblog/'+location.state.val._id,form).then((res)=>{
      alert(res.data);
      navigate('/blogs')
    })
    }
    else{
    try {
      const response = await axiosInstance.post('/blogapplication/addblog', form);
      alert(response.data);
      setForm({ title: '', description: '', ImageURL: '' }); 
    } catch (error) {
      alert('Failed to add the blog. Please try again.');
      console.error(error);
    }
  }
  };

  useEffect(()=>{
    if(location.state!=null){
   setForm({...form,title:location.state.val.title,
                    description:location.state.val.description,
                    ImageURL:location.state.val.ImageURL
   })
    }else{
      setForm({...form,title:'',
        description:'',
        ImageURL:''
})
    }
  },[])

  return (
    <div style={{ margin: '8%' }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            name="ImageURL"
            value={form.ImageURL}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12 }}>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Add Blog
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Addblog