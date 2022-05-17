import { Button, Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
export const CardData=({name,email,details,gender})=>{
    const navigate=useNavigate();
    return (
        <div>
            CARD !!

            <Card>
                <CardContent>
                    <Typography variant="h4">Name : {name}</Typography>
                    <Typography variant="h5"> Email : {email}</Typography>
                    <Typography variant="h5"> Gender : {gender}</Typography>
                    <Typography variant="body"> Details : {details}</Typography>
                </CardContent>
            </Card>
            <Button
            color="secondary"
            onClick={()=>navigate("/form")}
            >Back</Button>
        </div>
    )
}