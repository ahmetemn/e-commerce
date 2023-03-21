import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Topbar.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Topbar = () => {
    return (
        <Nav
            className='Topbar  p-3' 
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
         
             >
            <Nav.Item>
                <div className=' topbaricon px-4 mt-1 '>
                <i className="fa-solid fa-truck fa-xl px-2"></i>
                    <span>1000 TL  üzeri  kargo bedava</span>
                </div>
            </Nav.Item>

            <Nav.Item>
                <div className=' topbaricon mt-1'>
                    <Link className='topbarLink'>
                        <div className=''>
                            <i className="fa-solid fa-shop fa-xl px-1 "></i>
                            <span>Mağazamız</span>
                        </div>

                    </Link>
                </div>
            </Nav.Item>

            <Nav.Item>

                <div className='px-4'>
                    <Button className='topbarbutton' variant="light" > <i class="fa-solid fa-phone-volume fa-xl"></i> +90 5050809828</Button>
                </div>
            </Nav.Item>
            <Nav.Item>
                <div className='topbaricon mt-1'>
                    <Link  className='topbarLink'>
                        <div >

                            <i className="fa-solid fa-envelope fa-xl px-1"></i>  
                             
                               
                            
                             <span>info@tekirelektrik.com</span>
                       
                        </div>

                    </Link>
                </div>
            </Nav.Item>


        </Nav>
    )
}

export default Topbar