import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home from './view/Home';
import Listings from './view/ListingsPage';
import ListingsDetail from './view/ListingsDetailPage';
import LandlordDashboard from './view/LandlordDashboardPage';
import Profile from './view/ProfilePage';
import PubulishListings from './view/PublishListingsPage';
import RentListings from './view/RentListingsPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={Listings} />
          <Route path='/list/:id' component={ListingsDetail} />
          <Route path='/list/:id/:book' component={RentListings} />
          <Route path='/user' component={Profile} />
          <Route path='/user/:id' component={LandlordDashboard} />
          <Route path='/user/:id/:publish' component={PubulishListing} />
          
        </div>
      </Router>
    );
  }
}