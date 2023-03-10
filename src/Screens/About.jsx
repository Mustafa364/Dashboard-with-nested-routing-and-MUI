import Box from '@mui/material/Box';
import axios from "axios";
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Sidebar from "../Component/Sidebar";
import TextField from '@mui/material/TextField';
function About() {
    const [mmdata, setmData] = useState([]);
    let api = ('https://jsonplaceholder.typicode.com/todos');
    axios.get(api).then((response) => {
        setmData(response.data)
    }).catch((err) => {
        console.log('error not found')
    })
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>This is About Page</h2>
                    <TextField id="outlined-basic" label="Search here" variant="outlined" sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }} />
                    <Typography paragraph>

                        <div className="grid">
                            {mmdata.slice(0,12).map((x, i) => {
                                return (
                                    <div className="card" key={i}>
                                    <h5>{x.title}</h5>
                                        <h6>{x.body}</h6>
                                        <p>{x.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
export default About;