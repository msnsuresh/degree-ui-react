import React from 'react';
import _ from 'lodash';
import ListGroupItem from './ListGroupItem'

export default class ResponseContent extends React.Component {

  constructor(props) {
    super(props);
  }

  listGroupItemsSection() {
    return _.map(this.props.response.path, (path, index) => <div key={index} className="list-group">
        <ListGroupItem path={path} />
      </div>);

    /*return (
      <div className="list-group">
        <ListGroupItem />
      </div>
    );*/
  }

  responseContentRenderSection() {
    console.log(this.props);
    if(this.props.response.level == 0) {
      return (
        <div className="col-md-12">
          <h4>No Degree of Seperation. Sorry :(</h4>
        </div>
      );
    } else if(this.props.response.level > 0) {
      return (
        <div className="col-md-12">
          <h4>Degree of Seperation : {this.props.response.level}</h4>

          {this.listGroupItemsSection()}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        {this.responseContentRenderSection()}
      </div>
    );
  }
}