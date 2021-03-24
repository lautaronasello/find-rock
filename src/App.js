import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import PageSearchResult from "./page-search-result.js";
// eslint-disable-next-line no-unused-vars
import PageArtist from "./page-artist.js";
import PageHome from "./page-home.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Footer from "./components/footer.js";
// import Loading from "./components/loading.js";
import Layout from "./components/Layout.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult} />
            <Route exact path="/artista" component={PageArtist} />
            <Route path="/" component={PageHome} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
