import React, { useEffect, useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import QueryData from '../Query/QueryData';
import { useNavigate } from 'react-router-dom';

const QueryTable = () => {

    const tokenValue = window.localStorage.getItem("token")

    const navigate = useNavigate()

    const [query, setQuery] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/contact',{
            method: "POST",
            headers: 
            { 
            "Content-Type": "application/json" ,
            } ,
            body: JSON.stringify({ token : tokenValue })
          })
          .then(response => {
            if (response.status === 404) {
                // Navigate to the 404 error page
                navigate('/error404');
            }
            return response.json();
        })
            .then(data => setQuery(data));
    }, [navigate, tokenValue])

    // console.log(query)

    return (
        <>
            <div className="Table">
                <TableContainer
                    component={Paper}
                    style={{ boxShadow: "0px 13px 20px 0px #80808029", marginTop: "-4rem", overflow: "scroll", maxHeight: "26rem" }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>TicketId</TableCell>
                                <TableCell align="left">Subject</TableCell>
                                <TableCell align="left">Details</TableCell>
                                <TableCell align="left">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ color: "white" }}>
                            {query.map((value) => (
                                <QueryData value={value} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default QueryTable