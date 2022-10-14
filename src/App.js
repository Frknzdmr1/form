import { useState } from 'react';
import './App.css';
import FormFormik from './components/FormFormik';
import Form from './components/Forms';
import FormsValidation from './components/FormsValidation';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {

  const [loggedin, setLoggedIn] = useState(false)

  const login = () => { 
    setLoggedIn(true)
  }
  
  return (
    <div className="App">
      <Navigation auth={ loggedin} />
			<div class="container">
				{/* <Form/>  */}
        { !loggedin && <FormsValidation onLogin={ login} /> }
        { loggedin&&<Home/>}
				{/* <FormFormik/> */}
			</div>
		</div>
	);
}

export default App;
