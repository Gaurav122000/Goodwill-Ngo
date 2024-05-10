import React, { useEffect, useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const QueryTable = () => {

    const [query, setQuery] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/contact')
            .then(response => response.json())
            .then(data => setQuery(data));
    }, [])

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
                                <TableCell>Id</TableCell>
                                <TableCell align="left">Subject</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ color: "white" }}>
                            {query.map((value) => (
                                        <TableRow key={value.ticketId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                            <TableCell component="th" scope="row">{value.ticketId}</TableCell>
                                            <TableCell component="th" scope="row">{value.subject}</TableCell>
                                            <TableCell component="th" scope="row"></TableCell>
                                            <TableCell align="left" className="Details">Details</TableCell>
                                        </TableRow>
                                    ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default QueryTable