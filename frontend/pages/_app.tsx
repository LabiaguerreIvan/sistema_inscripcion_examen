import React, { useEffect, useState } from 'react';
// pages/_app.tsx
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // O el tema que elijas
import 'primereact/resources/primereact.min.css';                 // Estilos base de PrimeReact
import '@/styles/globals.css'; // Archivo de estilos globales
import { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>

  );

}

export default MyApp;