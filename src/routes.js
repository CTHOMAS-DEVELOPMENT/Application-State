import React, {Component} from 'react';
import Container1 from './containers/container1'
import Header from './containers/header';
import Form1 from './containers/form1';
import RenderList from './containers/renderlist';
import Home from './functional/home';
import RenderListItem from './functional/renderlistitem';
import HooksContainer from './hooks/hooks_container1';
import history from './utils/history';
import { Router, Route, Switch } from 'react-router';

class Routes extends Component {

  render() {
    return(
      <>
        <Router history={history} >
        <div className='grid-container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/form1' component={Form1} />
            <Route exact path='/container1' render={() => <Container1 /> } />
            <Route path='/renderlist' component={RenderList} />
            <Route path="/hookscontainer" component={HooksContainer} />
            <Route path="/listitem/:id" component={RenderListItem} />
          </Switch>
        </div>
        </Router>
      </>
    )}
}

export default Routes;
