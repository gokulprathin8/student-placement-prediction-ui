import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Body from './Components/Common/Body';
import Login from './Components/Authentication/Login';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Body} exact />
                <Route path="/login" component={Login} exact />
            </Switch>    
        </BrowserRouter>
        
    );
}

export default App;
