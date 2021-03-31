import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import NewPost from './NewPost';
import PostDetails from './PostDetails';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts/new" component={NewPost} />
      <Route exact path="/posts/:id" component={PostDetails} />
    </Switch>
  );
};

export default AppRouter;