"use client"
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";

interface authContextType {
    user: any;
    setUser: (user: any) => void;
    logout : () => void;
}

const AuthContext = createContext<authContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const [user, setUser] = useState<any>({ name: "Admin", email: "admin@sahayak.com", isAdmin: true });

    const logout = () => {
        setUser(null)
        router.push('/')
        toast.success('User Logged out!')
    }

    const value = {
        user,
        setUser,
        logout
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within auth Provider');

    return context;
} 