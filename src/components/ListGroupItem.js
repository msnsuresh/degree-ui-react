import React from 'react';
import _ from 'lodash';
import EntityItem from './EntityItem';

export default class ListGroupItem extends React.Component {

  constructor(props) {
    super(props);
  }

  entityItemRenderSection() {
    return _.map(this.props.path, (entity, index) => <EntityItem key={index} role={entity.role} name={entity.name} />);
  }

  render() {
    return (
      // <div>TEST</div>
      <span className="list-group-item">
        {this.entityItemRenderSection()}
      </span>
    );
  }
}