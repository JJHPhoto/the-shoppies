import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";
import Nominated from "./pages/Nominated";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <GlobalNavbar />
      <Container className="py-5">
        <Header />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/nominated" component={Nominated} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
