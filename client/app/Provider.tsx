"use client"

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AppContext";


export default function Provider({ children }: any) {
    return (
        <AuthProvider>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#1B3022',
                        color: '#fff',
                        borderRadius: '12px',
                        fontSize: '14px'
                    }
                }}
            />
            {children}
        </AuthProvider>
    )
}