// LIBRERIAS IMPORTADAS AL COMPONENTE
import React, { useEffect, useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { WhatsApp, Instagram, Facebook } from '@mui/icons-material';
import ButtonPrueba from '@/components/Button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';



// COMPONENTE/PANTALLA DE REACT (LOGIN)
const Login: React.FC = () => { // 'React.FC' typescrip declara que es un componente funcional
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const { login, user, hasRole, logout } = useAuth();

    const handleLoginAsAdmin = () => {
        // Simulamos un usuario admin logueado
        const adminUser = { id: 1, name: 'Admin User', role: 'admin' };
        login(adminUser);
        router.push("/home")
    };

    const handleLoginAsAlumno = () => {
        // Simulamos un usuario alumno logueado
        const alumnoUser = { id: 2, name: 'Alumno User', role: 'alumno' };
        login(alumnoUser);
        router.push("/home")
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
        console.log('Correo:', email, 'Contraseña:', password);

    };


    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white p-8">
                {/* Left side image */}
                <div className="hidden lg:flex items-center justify-center w-96 bg-white rounded-lg p-4">
                    <img
                        src="https://www.lacademia.com.ar/logo.png"
                        alt="LACADEMIA"
                        className="rounded-lg"
                    />
                </div>

                {/* Right side login form */}
                <form className="flex flex-col justify-center w-full max-w-md">
                    <h2 className="text-3xl font-semibold text-center mb-6">Iniciar Sesión</h2>

                    <div className="mb-4">

                        <TextField
                            id="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} // useState detecta un cambio y modifica la variable
                            type="email"
                            label="Correo"
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="mb-4">
                        <TextField
                            id="password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            type="password"
                            label="Contraseña"
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <Button type="button" variant="contained" color="primary" fullWidth onClick={handleLoginAsAdmin}>
                        Ingresar
                    </Button>
                    <hr />
                    {/* <ButtonPrueba label="Primary" onClick={handleSubmit} variant="secondary" size="medium" /> */}

                    {/* Social icons */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <IconButton href="#" color="primary">
                            <WhatsApp fontSize="large" />
                        </IconButton>
                        <IconButton href="#" color="primary">
                            <Instagram fontSize="large" />
                        </IconButton>
                        <IconButton href="#" color="primary">
                            <Facebook fontSize="large" />
                        </IconButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
