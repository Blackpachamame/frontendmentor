import Typography from '@mui/material/Typography';
import FormSingUp from './components/FormSingUp';
import Container from '@mui/material/Container';

function App() {

  const handleSubmit = (valores) => {
    console.log('APPJS: ', valores)
  };

  return (
    <Container component="section" maxWidth="xs">
      <Typography variant="h4" align='center' component="h1" gutterBottom>Formulario de Registro</Typography>
      <FormSingUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
