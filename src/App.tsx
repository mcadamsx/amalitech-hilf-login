// App.tsx
import React from "react";
import Avater from "./components/avater";
import Login from "./components/Login/Login";

const App: React.FC = () => {
 

  return (
    <div className="main">
      <Avater />
      <Login/>
    </div>
  );
};

export default App;
 