import React from 'react'
import ReactDOM from 'react-dom/client'
import AppClass from "./AppClass.jsx";
import HelloWorld from "./HelloWorld.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className="container">
          <div className="row">
              <div className="col">
                  <AppClass msg="Hello, world!" />
                  <HelloWorld msg="Hello, again!"/>
              </div>
          </div>
      </div>
  </React.StrictMode>,
)
