import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import "./Table.css";
import Form from 'react-bootstrap/Form';


export default function BasicTable() {
  const [donate, setDonate] = useState([]);

  // const [donate]
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/donate')
      .then(response => response.json())
      .then(data => setDonate(data));


  }, []);




  return (
    <>
      <div className="search">
        <Form.Control
          type="text"
          id="search"
          placeholder="Filter By Name..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginTop: "-2.5rem" }}
        />
        <Form.Select aria-label="Filter-By-Donation" style={{marginTop:"1rem"}} onChange={(e) => setSearch(e.target.value)}>
          <option value="" placeholder="Filter by Donation...">Filter by Donation...</option>
          <option value="money">Money</option>
          <option value="clothes">Clothes</option>
          <option value="shoes">Shoes</option>
          <option value="books">Books</option>
        </Form.Select>
      </div>
      <div className="Table">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", marginTop: "-4rem", overflow: "scroll", maxHeight: "26rem" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Contributors</TableCell>
                <TableCell align="left">Donations</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Contact Number</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {donate.filter((data) => {
              
                if(search === "money" || search === "shoes" || search === "clothes" || search === "books" ){
                  return search.toLowerCase() === '' ? data : (data.donation).toLowerCase().includes(search)
                  
                }
                return search.toLowerCase() === '' ? data : (data.name).toLowerCase().includes(search)
              }).map((data) => (
                <TableRow

                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{(data.name).toUpperCase()}</TableCell>
                  <TableCell align="left">{(data.donation).toUpperCase()}</TableCell>
                  <TableCell align="left">{data.createdAt}</TableCell>
                  <TableCell align="left">{data.amount}</TableCell>
                  <TableCell align="left">{data.pickup}</TableCell>
                  <TableCell align="left">{data.phone}</TableCell>
                  {/* <TableCell align="left" className="Details">Details</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
