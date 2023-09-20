import React from 'react';
import { Image } from 'react-bootstrap';
import HeaderImg from './PHONELINK.jpg'

const Header = ()=>{
    return (
        <div className='header-frame'>
            <Image src={HeaderImg} className='header-banner' />
        </div>
    )
}

export default Header;