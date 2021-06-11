import React, {useState} from 'react'
import Experience from '../components/Experience'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection'
import { homeObjOne, homeObjTwo} from '../components/infoSection/Data'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>  
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Experience />
            <Projects />
            <InfoSection {...homeObjTwo}/>
            <Footer />
        </>
    )
}

export default Home
