import { Card, CardContent, Typography } from "@mui/material"

export const CardData=({name,email,details,gender})=>{
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
        </div>
    )
}