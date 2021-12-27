import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./containers/HomeTemplate";
import PageNotFound from "./containers/PageNotFound";
import { routeHome, routeAdmin } from "./routes";
import "./App.css";
import AdminTemplate from "./containers/AdminTemplate";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routeHome)}
        {showLayoutAdmin(routeAdmin)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
