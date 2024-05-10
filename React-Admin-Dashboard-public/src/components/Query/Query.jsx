import React from 'react'
import Sidebar from '../Sidebar'
// import "./Donation.css"
import QueryTable from '../Table/QueryTable'



const Query = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className="tableDonation">
                    <h1 style={{marginTop:"4rem"}}>Queries</h1>
                   <QueryTable />
                </div>
            </div>
        </div>
    )
}

export default Query