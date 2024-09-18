import {Sidebar} from './components/sidebar';
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

   <div style={{display: 'flex'}}>

   <Sidebar/>

<Chat /> 
   </div>

    </div>
  );
}




export default App;

