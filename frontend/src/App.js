import React from 'react';
import Layout from "./components/UI/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import PostsPage from "./containers/PostsPage/PostsPage";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={PostsPage} />
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </Layout>
    );
};

export default App;