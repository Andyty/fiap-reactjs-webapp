import React from 'react';
import './App.scss';
import Div100vh from 'react-div-100vh';
import { Navigation } from './Components/Navigation/Navigation';
import { Switch, Route } from "react-router-dom";

const UserProfile = React.lazy(() => import('./Pages/UserProfile/UserProfileController'));
const Login = React.lazy(() => import('./Pages/Login/LoginController'));
const Home = React.lazy(() => import('./Pages/Home/HomeController'));
const CourseDetail = React.lazy(() => import('./Pages/CourseDetail/CourseDetailController'));


const App = () => {
    return (
        <Div100vh>
            <div className="App">
                <Navigation />
                <React.Suspense fallback={<span></span>}>
                    <Switch>
                        <Route path="/user/:id" exact component={UserProfile} />
                        <Route path="/course/:id" exact component={CourseDetail} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </React.Suspense>
            </div>
        </Div100vh>
    );
}

export default App;