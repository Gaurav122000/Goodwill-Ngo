import React, { useEffect, useState } from 'react'

const QueryTable = () => {

    const [query, setQuery] = useState()

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
                            {
                                query.map((data) => (
                                        <TableRow

                                            key={data.id}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{data.ticketId}</TableCell>
                                            <TableCell component="th" scope="row">{data.subject}</TableCell>
                                            <TableCell component="th" scope="row">{data.id}</TableCell>
                                            {/* <TableCell align="left" className="Details">Details</TableCell> */}
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