

import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { get, login, register } from "../service/apiClient";
import jwt_decode from "jwt-decode";

import Navbar from '../components/navbar/navbar'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [token, setToken] = useState(null);
    const [loggedInUserInfo, setLoggedInUserInfo] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (storedToken && !token) {
            setToken(storedToken);
            const { userId } = jwt_decode(storedToken);
            const getUserInfo = async () => {
                const res = await get(`user/${userId}`);
                setLoggedInUserInfo(res.data.user);
                if (!res.data.user.firstName || !res.data.user.lastName) {
                    navigate("/profile");
                } else {
                    navigate(location.pathname || "/");
                }
            };
            getUserInfo();
        }
    }, [token, navigate, location.pathname]);

    const handleLogin = async (email, password) => {
        const res = await login(email, password);
        if (!res.data.token) {
            return res;
        }

        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        setLoggedInUserInfo(res.data.user);
        setIsLoggedIn(true); // Set isLoggedIn to true
        navigate("/");
        return res;
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setIsLoggedIn(false); // Set isLoggedIn to false
    };

    const handleRegister = async (email, password, firstName, lastName, phone) => {
        const res = await register(email, password, firstName, lastName, phone);
        const status = res.status;

        if (status === "fail") {
            return status;
        } else if (status === "success") {
            const res = await login(email, password);
            setToken(res.data.token);
            navigate("/");
            return status;
        }
    };

    const value = {
        token,
        loggedInUserInfo,
        isLoggedIn, // Pass isLoggedIn to the context
        onLogin: handleLogin,
        onLogout: handleLogout,
        onRegister: handleRegister,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to={"/main"} replace state={{ from: location }} />;
    }

    return (
        <div className="container">
            <Navbar />
            {children}
        </div>
    );
};

export { AuthContext, AuthProvider, ProtectedRoute };
