import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import Home from "../pages/Home"

export const NavBar = () => (
    <>
        <Link to="/"><button type="button">Home</button></Link>
        <Link to="/hello"><button type="button">Hello</button></Link>
        <Link to="/counter"><button type="button">Counter</button></Link>
    </>
)

const Hello = () => (<><h1>Hello</h1></>)
const NoMatch = () => (<><h1>404</h1></>)

const Routing = (): React.ReactElement => (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/hello" element={<Hello/>}></Route>
            <Route element={<NoMatch/>}></Route>
        </Routes>
    </>
)

export default Routing