import './Home.module.css'
import Home_Header from './Home_Header/Home_Header'
import Screen from './Screen/Screen'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Outlet/>
            <Home_Header />
            <Screen />
        </>
    )
}
