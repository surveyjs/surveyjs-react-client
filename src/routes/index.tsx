import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Run from "../pages/Run"
import Edit from "../pages/Edit"

export const NavBar = () => (
    <>
        <Link className='sjs-button' to="/"><span>Home</span></Link>
        <Link className='sjs-button' to="/about"><span>About</span></Link>
    </>
)

const NoMatch = () => (<><h1>404</h1></>)

const Content = (): React.ReactElement => (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/run/:id" element={<Run/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route element={<NoMatch/>}></Route>
        </Routes>
    </>
)

export default Content