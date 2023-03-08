import heroImage from "../media/hero-image.svg"
import {Box, Typography,Div} from "@mui/material";

export default function HeroImage(){

    return (
        <Box sx={{backgroundColor: '#121212', display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Typography variant="h4" sx={{color:"white", border:"2rem 0", width:"50%"}}>
            <div>
            100 Thousand Songs, ad-free
            </div>
            <div>
            Over thousands podcast episodes.
            </div>
            </Typography>
        <img src={heroImage} alt='Hero' />
        </Box>
    )
}