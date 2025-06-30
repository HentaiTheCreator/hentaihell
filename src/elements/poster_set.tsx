import { Poster } from "./poster";
import Grid2 from "@mui/material/Unstable_Grid2";

export function Poster_Set(props:any){

    console.log(props.data)
    let return_arr = [];
    if (props.data != null){
        for(let i=0; i< props.data.sections.length; i++){
            return_arr.push(i);
        }
        return(
            <div>
                <Grid2 className="PosterSetGrid" container spacing={2}>
                {
                    return_arr.map((x:number)=>{
                        return (<Grid2><Poster name={props.data.sections[x].name} link={props.data.sections[x].link} image={props.data.sections[x].image} /></Grid2>)
                    })
                }
                </Grid2>
            </div>
        )
    }


}