
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";
import { DefaultLayout } from "src/layouts";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, index) => {
            let Layout = DefaultLayout;
            if (item.layout) {
              Layout = item.layout;
            } else if (item.layout === null) {
              Layout = Fragment;
            }
            
            const Page = item.component;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
