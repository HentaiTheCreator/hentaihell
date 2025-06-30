import { Box } from "@mui/material";
import {Paper} from "@mui/material";

export function Poster(props:any){

    return(
        <>
        <Box className="PosterContainer">
            <Paper className="PosterBox" elevation={5}>
                <a href={props.link}>
                    <img className="PosterImage" src={props.image}></img>
                </a>
            </Paper>
            
            <a href={props.link}><h3>{props.name}</h3></a>
            
        </Box>
        </>
    )

}