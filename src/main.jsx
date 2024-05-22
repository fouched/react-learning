import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
// import AppClass from './AppClass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className="container">
          <div className="row">
              <div className="col">
                  <App msg="State using functional component"/>
                  {/*<AppClass msg="State using class component" />*/}
              </div>
          </div>
      </div>
  </React.StrictMode>,
)
