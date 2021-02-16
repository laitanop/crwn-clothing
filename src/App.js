import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component.jsx';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
