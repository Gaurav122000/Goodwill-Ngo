import React from 'react'
import Sidebar from '../Sidebar'
import TableContainer from '../Table/Table'
import "./Donation.css"



const Donation = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className="tableDonation">
                    <h1 style={{marginTop:"4rem"}}>Donations</h1>
                    <TableContainer />
                </div>
            </div>
        </div>
    )
}

export default Donation