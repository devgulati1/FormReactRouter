import { Button,Typography,Grid,Paper, TextField, Select, MenuItem } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const Form=({recieveData})=>{
    let navigate=useNavigate();
    const [msg,setMsg]=useState("");
const [name,setName]=useState("");
const [details,setDetails]=useState("");
const [email,setEmail]=useState("");
const [gender,setGender]=useState("male");



const handleDetails=(e)=>{
    setDetails(e.target.value);
}
const handleName=(e)=>{
    setName(e.target.value);
}
const handleEmail=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value)
}
const handleGender=(e)=>{
    setGender(e.target.value);
}
    const submitHandler=(e)=>{
        
        if(name==="" || email==="" || details ===""){
            setMsg("Please Fill Out The Details Of the Form !!")
        }else{
        recieveData(name,email,details,gender);

        console.log(name,email,details,gender);
        navigate("/card");
        }
        
    }
    return (
<form >
    <Grid container spacing={4}>

   <Grid item md={12}>
    <TextField
        onChange={handleName}

required
label="Name"
variant='outlined'
color="secondary" focused

></TextField>
</Grid>
<Grid item md={12}>
        <TextField
             onChange={handleDetails}
required

label="Details"
variant='outlined'
multiline
maxRows={4}
color="secondary" focused

></TextField>
</Grid>
<Grid item md={12}>
        <TextField
             onChange={handleEmail}
required

label="Email"
variant='outlined'

color="secondary" focused

></TextField>
</Grid>
     

       
 <Grid item md={12}>
 <Select
    
    value={gender}
    label="Gender"
    onChange={handleGender}
  >
    <MenuItem value={"male"}>Male</MenuItem>
    <MenuItem value={"female"}>Female</MenuItem>
    
  </Select>
 </Grid>
    

<Grid item md={12}>
<Button
onClick={submitHandler}
// type='submit'
     variant="contained"
     color="secondary"
     >Submit</Button>
     </Grid>
     <Grid item >
<h3>{msg}</h3>
</Grid>

</Grid>

</form> 


    
    )

    
}