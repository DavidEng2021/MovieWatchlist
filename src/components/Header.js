import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to='/'>電影觀看清單</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to='/'>待看清單</Link>
                        </li>
                        <li>
                            <Link to='/watched'>已看清單</Link>
                        </li>
                        <li>
                            <Link to='/add' className='btn'>+ 新增</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </header>
    )
}
