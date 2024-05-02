import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";


const ServicesCard = ({ img, title, body }) => {
    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className=" shadow-lg p-3 mb-5 bg-white rounded d-flex p-3 w-100 flex-column justify-content-center align-items-center event-box">
                    <img src={img} alt="Education" />
                    <h4 style={{
                        fontSize: "1.1rem",
                        padding: "8px",
                    }}
                    >
                        {title}
                    </h4>
                    {/* <p
                style={{
                  textAlign: "center",
                }}
                className="raises"
              >
                <span style={{ color: "green" }}>Raised: $34,425</span> /
                $500,000
              </p> */}

                    <p
                        style={{
                            textAlign: "justify",
                            fontSize: "16px",
                            padding: "6px",
                        }}
                        className="desic"
                    >
                        {body}
                    </p>
                    <a href="/donation">
                        <div className="row bg-success mt-3">
                            <button className="btn btn-success">Donate Now</button>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ServicesCard
