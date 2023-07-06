import React, {useEffect, useState} from 'react';


import {createRoot} from 'react-dom/client';


import './index.css';
import {Test} from './Test/Test';

const App = () => {
  const [header, setHeader] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setHeader(true);
    }, 0);
  }, []);

  return (
    <div className="container">
      {header && <Test></Test>}
    </div>
  );
};

const root = createRoot(document.getElementById('app') as Element);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
