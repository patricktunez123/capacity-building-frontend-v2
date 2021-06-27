import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import ProgramsPage from "./containers/ProgramsPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/programs" exact>
        <ProgramsPage />
      </Route>
    </Switch>
  );
}

export default App;
