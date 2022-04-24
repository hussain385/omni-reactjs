import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './sideBar.css'

function SideBar(props) {
    const location = useLocation()
    const {pathname} = location
    console.log(pathname);
    return (
        <div className='mainContainerSideBar'>
            <div className='container1'>
                <div className='center subContainer1'><h1>LOGO</h1></div>
                <div className='subContainer2'>
                    <div className='menuItem'>
                        <Link className={pathname === '/' ? 'activeSlot' : 'unActiveSlot'} to="/"><p>Dashboard</p></Link>
                        <Link className={pathname === '/inventory' ? 'activeSlot' : 'unActiveSlot'} to='/inventory'><p>Inventory</p></Link>
                        <Link className={pathname === '/reciept' ? 'activeSlot' : 'unActiveSlot'} to='/reciept'><p>Reciepts</p></Link>
                        <Link className={pathname === '/customer' ? 'activeSlot' : 'unActiveSlot'} to='/customer'><p>Customer</p></Link>
                        <Link className={pathname === '/setting' ? 'activeSlot' : 'unActiveSlot'} to='/setting'><p>Settings</p></Link>
                    </div>
                </div>
                <div className='center subContainer3'><button>Sign out</button></div>
            </div>
            <div className='container2'>
                {props.children}
            </div>
        </div>
    )
}

export default SideBar