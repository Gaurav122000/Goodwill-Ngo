import React from 'react'
import Sidebar from '../Sidebar'
import "./Volunteer.css"
import VolunteerTable from '../Table/VolunteerTable'



const Volunteer = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className="tableDonation">
                    <h1 style={{marginTop:"4rem"}}>Volunteer List</h1>
                    <VolunteerTable />
                </div>
            </div>
        </div>
    )
}

export default Volunteer