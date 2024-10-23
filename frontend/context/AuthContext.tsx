import React, { createContext, useContext, useState, ReactNode } from 'react';

// Typescript define los datos que van a llegar
// Definimos el tipo de usuario
interface User {
    id: number;
    dni: number;
    name: string;
    role: 'admin' | 'alumno' | 'profesor';
    matricula: string | null;
}

// Definimos el tipo del contexto
interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    hasRole: (role: 'admin' | 'alumno' | 'profesor') => boolean;
}

// Crear el contexto con valores iniciales
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente proveedor del contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Función para loguearse, recibe el usuario
    const login = (user: User) => setUser(user);

    // Función para desloguearse
    const logout = () => setUser(null);

    // Comprobar si el usuario tiene un rol específico
    const hasRole = (role: 'admin' | 'alumno' | 'otro') => user?.role === role;

    return (
        <AuthContext.Provider value={{ user, login, logout, hasRole }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook para acceder al contexto
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};