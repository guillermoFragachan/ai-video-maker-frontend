import React from 'react';
import {Sidebar} from './components/sidebar';

import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';  // or choose any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; // for icons
import 'primeflex/primeflex.css'; // for layout utilities
import './index.css'; // keep this for your custom styles if needed



function App() {
  return (
    <div className="p-d-flex p-ai-center p-jc-center min-h-screen">

    <Sidebar/>
      <Button label="Click Me" icon="pi pi-check" className="p-button-raised p-button-success" />
    </div>
  );
}




export default App;

