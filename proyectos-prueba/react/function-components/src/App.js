import './App.css';
import Typography from '@mui/material/Typography';
import FormSingUp from './components/FormSingUp';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align='center' component="h1" gutterBottom>Formulario de Registro</Typography>
      <FormSingUp />
    </Container>
  );
}

export default App;
