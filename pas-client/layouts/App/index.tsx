import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Playground = loadable(() => import('@layouts/Playground'));
const Lobby = loadable(() => import('@layouts/Lobby'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      {/* lobby 는 전체 학생이 볼 수 있는 로비 화면. 여기서 개인 방 생성 가능 */}
      <Route path="/playgrounds" component={Lobby} />
      <Route path="/:roomID" component={Playground} />
    </Switch>
  );
};

export default App;
