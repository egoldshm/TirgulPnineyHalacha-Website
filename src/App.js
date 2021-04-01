import './App.css';
import MyCard from './Card';
import ButtonAppBar from "./header/header.jsx"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

export default function App() { 
  return (
    <Router>
      <div className="App">
      <title>אתר מבחנים</title>
      <link rel="icon" type="image/png" href="https://ph.yhb.org.il/wp-content/uploads/2016/02/cropped-e1456071683432-192x192.jpg"/>
      <ButtonAppBar/>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      <header className="App-header">
      <br/>
        <Switch>
          <Route path="/quizzes">
          <MyCard question = "איך קוראים לך?" answer = "איתן"/>
          </Route>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
        </header>
    </div>
    </Router>
  );
}
