import Box from '@mui/material/Box';
import axios from "axios";
import React, { useState } from "react";
import '../App.css'
import Typography from '@mui/material/Typography';
import Sidebar from "../Component/Sidebar";
import TextField from '@mui/material/TextField';

function Contact() {
    const [mmdata, setmData] = useState([]);
    let api = ('https://jsonplaceholder.typicode.com/comments');
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
                    <h2>This is Contact Page</h2>
                    <TextField id="outlined-basic" label="Search here" variant="outlined" sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }} />
                    <Typography paragraph>
                        <div className="grid">
                            {mmdata.slice(0,12).map((x, i) => {
                                return (
                                    <div className="card" key={i}>
                                        <p>{x.body}</p>
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
export default Contact;