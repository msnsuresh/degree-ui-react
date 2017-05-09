import React from 'react';

export default class CubeHeader extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">Get Degree - Qube</a>
          </div>
        </nav>
      </header>
    );
  }
}