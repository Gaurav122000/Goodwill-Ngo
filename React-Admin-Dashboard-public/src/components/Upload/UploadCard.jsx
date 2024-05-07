import React from 'react'
import "./Upload.css"
import { Link } from 'react-router-dom';

const UploadCard = ({ bgColor, bxShadow, title, value, link }) => {
    return (
        <>
            <div className="upload-card">

                <div className="main-Card" style={{ background: bgColor, boxShadow: bxShadow }}>
                    <div className="data">
                        <span>{title}</span>
                    </div>
                    <div className="detail">
                        <span>{value}</span>
                    </div>
                    <Link className='link' to={link}>Click Here</Link>
                </div>
            </div>
        </>
    );
}

export default UploadCard