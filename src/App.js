import {Sidebar} from './components/sidebar';
import React, {useEffect, useState} from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';  // or choose any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; // for icons
import 'primeflex/primeflex.css'; // for layout utilities
import './index.css'; // keep this for your custom styles if needed



function App() {


  const [name, setName] = useState(false)
  const [isApproved, seIsApproved] = useState(false)



  const [users, setUsers] = useState([])


  const getUsers =() =>  {

    return ['userio 1', '2', '2']
  }

  useEffect(()=> {

    const list = getUsers()

    setUsers(list)
 
  }, [ ])
  return (
    <div className="p-d-flex p-ai-center p-jc-center min-h-screen">

    <Sidebar/>
      <Button label="Click Me" icon="pi pi-check" className="p-button-raised p-button-success" />
    </div>
  );
}




export default App;

