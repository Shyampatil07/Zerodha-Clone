import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className='menu-container'>
            <img src="logo.png" style={{width: "50px"}}/>
            <div className='menus'>
                <ul>
                    <li>
                        <p>Dashboard</p>
                    </li>
                    <li>
                        <p>Orders</p>
                    </li>
                    <li>
                        <p>Holdings</p>
                    </li>
                    <li>
                        <p>Positions</p>
                    </li>
                    <li>
                        <p>Funds</p>
                    </li>
                    <li>
                        <p>Dashboard</p>
                    </li>

                </ul>

            </div>
        </div>

    );
}