// import './App.css';
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
const Layout = React.lazy(() => import('./components/layouts/Layout'));

const loading = (
  <div className="row">
    <h2>
      loading...
    </h2>
  </div>
);
function App() {
  return (
    <React.Suspense fallback={loading}>
      <Router>
        <Switch>
          
          {/* if a page does not use the layoutPage which contains header and footer it should be added here
           other error pages, login, register and forgot password page would be included here 
          
            e.g
          <Route path="/login">
            <Login />
          </Route>  */}

          {/* all other routes are called in the layout page which consist of header, the page content and footer */}
          <Route path="/">
            <Layout />
          </Route>
            
        </Switch>
      </Router>

    </React.Suspense>
  );
}

export default App;