import React from 'react'
import './sideBar.css'

function SideBar(props) {
    props = {
        children: (<h1>hello</h1>)
    }
    return (
        <div className='mainContainerSideBar'>
            <div className='container1'>
                <div>item 1</div>
                <div>item 1</div>
                <div>item 1</div>
            </div>
            <div className='container2'>
                {props.children}
            </div>
        </div>
    )
}

export default SideBar