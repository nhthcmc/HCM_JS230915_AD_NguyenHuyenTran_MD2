import React, { useEffect, useState } from 'react';
import './navbar.scss'

export default function NavBar() {
    return (
        <div className="nav">
            <ul className="nav-left">
                <li>Trang chủ</li>
                <li>Danh sách sản phẩm</li>
            </ul>
        </div>
    )
}
