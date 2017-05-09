import React from 'react';
import CubeHeader from './CubeHeader'
import CubeContent from './CubeContent'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      response: []
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState({
        isLoading: this.props.store.getState().isLoading,
        response: this.props.store.getState().response
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <CubeHeader />
        <CubeContent 
          isLoading={this.state.isLoading}
          response={this.state.response} />
      </div >
    )
  }
}