import React from 'react'
import Sidebar from '../Sidebar'
import "./Donation.css"



const Donation = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className="tableDonation">
                    <h1 style={{marginTop:"4rem"}}>Donations</h1>
                   
                </div>
            </div>
        </div>
    )
}

export default Donation