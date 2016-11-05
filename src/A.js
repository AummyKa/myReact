import React, { PropTypes } from 'react'
const Controller = React.createClass({
  getDefaultProps () {
    return {
      isClicked: false
    }
  },
  renderDivColor () {
    if (this.props.isClicked) {
      return (
        <div className='blueBox'></div>
      )
    } else {
      return (
        <div className='blackBox'></div>
      )
    }
  },
  render () {
    return (
      <div onClick={this.props.onClick} className='boxContainer'>
        {this.renderDivColor()}
      </div>
    )
  }
})

export default Controller
