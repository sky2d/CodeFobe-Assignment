import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUserData } from "../services/ApiServices/fetchUserData";

/// context with a default value of undefined
const UserDataContext = createContext({
    userData: null,
    error: null,
    loading: true,
});

// Provider component
export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /// loadUserData function to fetch user data
        const loadUserData = async () => {
            try {
                const data = await fetchUserData();
                setUserData(data);
            } catch (err) {
                setError(err.message || "Failed to fetch user data.");
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, []);

    return (
        <UserDataContext.Provider value={{ userData, error, loading }}>
            {children}
        </UserDataContext.Provider>
    );
};

// Custom hook to use the UserDataContext
export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (context === undefined) {
        throw new Error("useUserData must be used within a UserDataProvider");
    }
    return context;
};
