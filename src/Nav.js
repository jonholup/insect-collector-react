import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery.js';
import Resources from './pages/Resources/Resources.js';
import NotFound from './pages/404/NotFound.js';
import Upload from './pages/Upload/Upload.js';
import Landing from './pages/Landing/Landing.js';

const UploadComponent = props => {
  return <Upload user={props.user} {...props} />;
};

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <NavLink to="/" className="Nav__brand">
            Home
          </NavLink>

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <NavLink className="Nav__link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="Nav__item">
                <NavLink className="Nav__link" to="/upload">
                  Upload
                </NavLink>
              </li>
              <li className="Nav__item">
                <NavLink className="Nav__link" to="/resources">
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/upload" render={UploadComponent} />
          <Route path="/resources" component={Resources} />
          <Route component={NotFound} />
        </Switch>
      </nav>
    );
  }
}
