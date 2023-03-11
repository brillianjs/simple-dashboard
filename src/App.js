import React, { lazy } from "react";
import Auth from "./pages/Login";
import { useState, useEffect } from "react";
import { supabase } from "./utils/api";
import { Switch, Redirect, Route } from "react-router-dom";
import { route } from "./route";
import Preloader from "./components/Preloader";

export default function App() {
  const [session, setSession] = useState(null);
  const { pathname } = window.location;

  const BaseLayout = lazy(() => import("./components/Baselayout"));

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route
          exact={true}
          path={"/login"}
          render={() => {
            if (session) {
              return <Redirect to="/" />;
            }

            document.title = ` Login || Dashboard`;
            return <Auth />;
          }}
        />
        {route.map((routes) => {
          return (
            <Route
              key={Array.isArray(routes.path) ? routes.path[0] : routes.path}
              exact={routes.exact}
              path={routes.path}
              render={() => {
                if (!session) {
                  return (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { returnUrl: window.location.pathname },
                      }}
                    />
                  );
                }
                document.title = `${routes.title} | Gussy Salon`;
                const AppLayout = BaseLayout;
                return (
                  <React.Suspense fallback={<Preloader />}>
                    <AppLayout>
                      <routes.component />
                    </AppLayout>
                  </React.Suspense>
                );
              }}
            />
          );
        })}
        {/* <Route path={"*"}>
          <h1>Page Not Found</h1>
        </Route> */}
      </Switch>
    </>
  );
}
