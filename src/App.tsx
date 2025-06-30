
import './App.css'
import { Box } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Poster_Set } from './elements/poster_set'

function App() { 

  const [data, setData] :any = useState(null);

  useEffect(()=>{

    axios.get('http://localhost:3001/api/data')
      .then((response) => setData(response.data))  // Set the data in state
      .catch((error) => console.error('Error fetching data:', error));

  },[])
  console.log(data);
  return (
    <>
      <section className='Head'>
        <Box>
          <img className="HeadImage" src="stuff/HenHelPic.png" />
        </Box>
      </section>
      <section className='MainSection'>

      <h2>Heißer Scheiß</h2>

        <Box className='HSSection'>
          {
            <div className='PosterSection'>
              <Poster_Set data={data}/>
            </div>
          }
          
        </Box>
      </section>
    </>
  )
}

export default App
