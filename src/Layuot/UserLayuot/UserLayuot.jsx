import React from 'react'
import Navpar from '../../Component/Navpar/Navpar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'
import Around from '../../Component/AROUND/Around'


export default function UserLayuot() {
    return (
        <>
            <Navpar />
            <Outlet />
            <Around />
            <Footer />
        </>
    )
}
