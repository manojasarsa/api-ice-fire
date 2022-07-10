import { Routes, Route, Navigate } from "react-router-dom";

export const NavRoutes = () => {
    return (
        <Routes>

            <Route path={"/mock"} element={<Mockman />} />

            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/signup" element={<Navigate to="/home" replace />} />

            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />


            <Route path="*" element={<h2> OOPS! Page Not Found</h2>} />
        </Routes>
    )
};