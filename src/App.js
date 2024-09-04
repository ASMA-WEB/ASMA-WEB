import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useRoutesHook from "routes/routes";

function App() {
  const routes = useRoutesHook();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="">
      <Suspense
        fallback={
          <div className="loading">
            <div className="spinner"></div>
          </div>
        }
      >
        {routes}
      </Suspense>
    </div>
  );
}

export default App;
