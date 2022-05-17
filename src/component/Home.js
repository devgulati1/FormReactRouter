import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
export const Home=()=>{
    let navigate=useNavigate();
    return(
        <div>
 

        {/* <button onClick={()=>{navigate("/form")}}>Form </button> */}

        <Button

     variant="contained"
     color="secondary"
     onClick={()=>{navigate("/form")}}
     >Form</Button>

        </div>
    )
}