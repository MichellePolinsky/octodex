import React, { Component } from 'react'

class Cats extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <section>
          <li>{this.props.imageNumber}</li>
          <li>{this.props.imageTitle}</li>
        </section>
      </li>
    )
  }
}

export default Cats
