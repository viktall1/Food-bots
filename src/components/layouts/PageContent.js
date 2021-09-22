import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import ErrorPage from '../../pages/ErrorPage'
// routes config file
import routes from '../../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="spinner spinner-pulse"></div>
  </div>
)

const PageContent = () => {
  return (
    <main className="main">
      <div className="">
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (

                    <route.component {...props} />

                  )} />
              )
            })}
            {/* redirect to profile page on loading of application*/}
            <Redirect exact from="/" to="/profile" />
            {/* redirect to error page if route is not found*/}
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </div>
    </main>
  )
}

export default React.memo(PageContent)
