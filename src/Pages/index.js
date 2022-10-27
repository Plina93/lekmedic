import React, {useState} from 'react'
import Sidebar from "../Components/Sidebar";
import Navigation from "../Components/Navigation";
import Banner from "../Components/Banner";
import Sector from "../Components/Sector";
import {sector1, sector2, sector3} from "../Components/Sector/Template";

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navigation toggle={toggle}/>
            <Banner/>
            <Sector {...sector1}/>
            <Sector {...sector2}/>
            <Sector {...sector3}/>
        </>
    )
}

export default HomePage