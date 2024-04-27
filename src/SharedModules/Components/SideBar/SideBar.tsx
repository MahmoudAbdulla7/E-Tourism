import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal';
import { LiaCitySolid, LiaPizzaSliceSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { HiMiniUsers } from "react-icons/hi2";
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import ammon from '../../../assets/Amoon.png'
import { GiLouvrePyramid } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

export default function SideBar() {
  const { t, i18n } = useTranslation();
    let [isCollapsed, setIsCollapsed] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let handleToggle=()=>{
    setIsCollapsed(!isCollapsed)
  }
  return (
    <>
   <div dir={i18n.language == "ar" ? "rtl" : "ltr"} className='sidebar-container  vh-100'>
      {/* <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          <ChangePass handleClose={handleClose}/>
        </Modal.Body>
        
      </Modal> */}
   <Sidebar collapsed={isCollapsed}>
  
  <Menu>
    <div onClick={handleToggle}>
    <img className='w-auto' src={ammon} alt='logo'/>
    </div>
  <MenuItem  icon={<IoMdHome className='text-2xl' />} component={<Link to="/dashboard" />}> {t("Home")} </MenuItem>
    <MenuItem  icon={<HiMiniUsers className='text-2xl' />} component={<Link to="/dashboard/users" />}> {t("Users")} </MenuItem>
    <MenuItem icon={<GiLouvrePyramid className='text-2xl'/>} component={<Link to="/dashboard/adminmonuments" />}>{t("Monuments")} </MenuItem>
    <MenuItem icon={<LiaCitySolid  className='text-2xl' />} component={<Link to="/dashboard/cities" />}> {t("Cities")} </MenuItem>
    {/* <MenuItem icon={<FaKey className='fs-4' />} onClick={handleShow}>Change Password</MenuItem> */}
    {/* <MenuItem icon={<IoLogOutOutline className='fs-4' />} onClick={logOut}>Logout</MenuItem> */}
  </Menu>
</Sidebar>
   </div>
    
    </>
  )
}
