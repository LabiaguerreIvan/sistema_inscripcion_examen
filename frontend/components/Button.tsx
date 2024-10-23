import React from 'react';

// TYPESCRIPT DEFINE LOS TIPOS DE PARAMETROS QUE LLEGAN AL BOTON 
type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
};

const ButtonPrueba: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', size = 'medium', disabled = false }) => {
    // Estilos según la variante (color del botón)
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
    };

    // Estilos según el tamaño
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-5 py-3 text-lg',
    };

    // Clase final que combina variantes y tamaños
    const classes = `${variantClasses[variant]} ${sizeClasses[size]} font-semibold rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default ButtonPrueba;
