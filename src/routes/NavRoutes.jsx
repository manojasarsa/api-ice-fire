import { Routes, Route } from "react-router-dom";
import {  BookDetails, Home } from "../pages";

export const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:bookid" element={<BookDetails />}></Route>
            <Route path="*" element={<h2> OOPS! Page Not Found</h2>} />
        </Routes>
    )
};