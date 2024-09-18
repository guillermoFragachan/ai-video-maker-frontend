import React, {useEffect, useState} from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import 'primeflex/primeflex.css'; 
import './index.css'; 
import { Chat } from './pages/chat';


function App() {



  return (
    <div className="p-d-flex p-ai-center p-jc-center min-h-screen" style={{}}>

<div className="p-d-flex p-jc-center p-ai-center" style={{ height: '100vh', backgroundColor: '#1e1e1e', display:"flex"  }}>

      <div style={{
        width:"20%"
      }}></div>
      <Chat /> 
      </div>

      </div>
  );
}






export default App;
