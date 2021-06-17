import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//context
import { GlobalStorage } from "./Contexts/GlobalStorage";
import { FormStorage } from "./Contexts/GlobalForm";

//Components
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import Elipse from "./Components/Ellipse/Elipse";

//Pages
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";

function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);

  return (
    <FormStorage>
      <GlobalStorage>
        {!done ? (
          <Loader />
        ) : (
          <Router>
            <Header />
            <Elipse />
            <Switch>
              <Home exact path="/" />
              <Result path="/Result" />
            </Switch>
          </Router>
        )}
      </GlobalStorage>
    </FormStorage>
  );
}

export default App;
