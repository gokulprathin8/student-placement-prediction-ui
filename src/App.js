import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Body from './Components/Common/Body';
import Login from './Components/Authentication/Login';
import CommonLayout from './Components/Common/CommonLayout';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Body} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/home" component={CommonLayout} exact />
            </Switch>    
        </BrowserRouter>
        
    );
}

export default App;
