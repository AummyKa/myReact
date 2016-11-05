import React, { PropTypes } from 'react'
import A from './A'
const Container = React.createClass({
  getInitialState: function() {
    return {
      isClicked: false
    }
  },
  onChange () {
    this.setState({isClicked: !this.state.isClicked})
  },
  render () {
    return (
      <div>

      <A isClicked={this.state.isClicked} onClick={this.onChange}/>
      <A isClicked={this.state.isClicked} onClick={this.onChange}/>
      </div>
    )
  }
})

export default Container
