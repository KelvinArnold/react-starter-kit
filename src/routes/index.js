import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Imort Views
import { PostsContainer } from 'Components/Posts';
import { PostDetailContainer } from 'Components/PostDetail';
import { Home } from 'Components/Home';
import { NotFound } from 'Components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/404" component={NotFound}></Route>
      <Route exact path="/posts" component={PostsContainer}></Route>
      <Route path="/posts/:id" component={PostDetailContainer}></Route>
      <Redirect to="/404"/>
    </Switch>
  )
}

export default Routes;
