// import { MoviesGrid } from "../MoviesGrid/MoviesGrid";
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from "../pages/MoviesDetails";
import { Landingpage } from "../pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
        {/* <Link to="/">Home</Link>
        <br></br>
        <Link to="/movies">Movies</Link> */}
      </header>
      <main>
      <Switch>
          <Route exact path="/movies/:movieId">
           <MovieDetails/>
          </Route>
          <Route exact path="/">
            <Landingpage/>
          </Route>
          <Route path="/">
            La pagina no existe error 404 xd xd xd xddddddd
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

// export default App;
