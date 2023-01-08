import logo from './logo.svg';
import './App.css';
import {AuthProvider} from "./contexts/pages/AuthProvider";
import Auth from "./pages/Auth";
import {Container, Grid} from "@mui/material";
import {HeaderProvider} from "./contexts/layouts/HeaderProvider";
import Header from "./layouts/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const token=localStorage.getItem("token")
  if(!token){
    return <AuthProvider>
      <Auth/>
    </AuthProvider>
  }
  return (
    <div className="App">
      {/*section header*/}
      <Container>
        <Grid className={'grid-col-12'}>
          <HeaderProvider>
            <Header/>
          </HeaderProvider>
        </Grid>
      </Container>

      {/*section router*/}
      <Container>
        <Grid className={'grid-col-12'}>
          <AppRoutes/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
