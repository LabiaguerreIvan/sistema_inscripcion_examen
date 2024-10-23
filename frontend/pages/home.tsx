import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Materia {
  id: number;
  nombre: string;
  profesor: string;
  horario: string;
}

const Home: React.FC = () => {
  const { user, hasRole } = useAuth();  // Obtener el usuario y su rol
  const [materias, setMaterias] = useState<Materia[]>([]);  // Estado para las materias

  // Cargar las materias desde un archivo JSON
  useEffect(() => {
    fetch('/materias.json')  // Asegúrate de que la ruta sea correcta
      .then((response) => response.json())
      .then((data) => {
        setMaterias(data);
      })
      .catch((error) => console.error('Error al cargar las materias:', error));
  }, []);

  // Función para verificar el rol
  // const hasRole = (role: string) => user?.role === role;

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Lista de Materias
      </Typography>

      {/* Mostrar el botón de agregar solo si el usuario es admin */}
      {hasRole('admin') && (
        <Button variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
          Agregar Materia
        </Button>
      )}

      {/* Renderizar las tarjetas de materias */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {materias.map((materia) => (
          <Card key={materia.id} style={{ width: '300px' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {materia.nombre}
              </Typography>
              <Typography color="text.secondary">
                Profesor: {materia.profesor}
              </Typography>
              <Typography color="text.secondary">
                Horario: {materia.horario}
              </Typography>
            </CardContent>
            {/* Mostrar los botones de editar solo si el usuario es admin */}
            {hasRole('admin') && (
              <CardActions>
                <Button size="small" color="primary">
                  Borrar
                </Button>
              </CardActions>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
