import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const navigate = useNavigate();

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  // console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          N<span>G</span>O
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          const handleChoice = () => {
            setSelected(index)
            if(index===0){
              navigate("/")
            }
            else if(index===1){
              navigate("/Table")
            }
            else if(index===2){
              navigate("/Volunteer")
            }
            else if(index===3){
              navigate("/Products")
            }
            else if(index===4){
              navigate("/Feedback")
            }
            else if(index===5){
              navigate("/Upload")
            }
          }
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={handleChoice}
              // onClick={() => setSelected(index)
              
            >
              <item.icon />
              <span>{item.heading}</span>
              
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
