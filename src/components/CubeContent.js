import React from 'react';
import Loader from './Loader'
import ResponseContent from './ResponseContent';
import FormContent from './FormContent'

export default class CubeContent extends React.Component {
  
  constructor(props) {
    super(props);
  }

  renderContentSection() {
    console.log('isLoading', this.props);
    if(this.props.isLoading) {
      return (
          <Loader />
      );
    } else {
      return (
        <div className="container">
          <FormContent />
          <ResponseContent response={this.props.response} />
        </div>
      );
    }
  }

  render() {
    return (
      <main>
        <div className="jumbotron">
          {this.renderContentSection()}
        </div>
      </main>
    );
  }
}