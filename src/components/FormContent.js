import React from 'react';
import {getDegree} from '../actions/app-actions'

export default class FormComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sourceText: '',
      destinationText: ''
    }
  }

  getDegreeOfSeperation() {
    if(this.state.sourceText && this.state.destinationText) {
      getDegree({
        source: this.state.sourceText,
        destination: this.state.destinationText
      });
    }
  }

  updateSourceText(event) {
    this.setState({
      sourceText: event.target.value
    })
  }

  updateDestinationText(event) {
    this.setState({
      destinationText: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <form>
          <div className="col-md-4">
            <input type="text" className="form-control" 
                placeholder="Enter source cini personality name 1..." 
                value={this.state.sourceText}
                onChange={this.updateSourceText.bind(this)} />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" 
                placeholder="Enter source cini personality name 2..." 
                value={this.state.destinationText}
                onChange={this.updateDestinationText.bind(this)} />
          </div>
          <div className="col-md-4">
            <a className="btn btn-primary pull-right" 
               onClick={this.getDegreeOfSeperation.bind(this)}>Get degree of Seperation</a>
          </div>
        </form>
      </div>
    );
  }
}