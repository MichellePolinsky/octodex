import React, { Component } from 'react'

class Cats extends Component {
  render() {
    return (
      <div className="cat-card">
        <div className="cat-img-area">
          <img
            className="cat-img"
            src={this.props.imageUrl}
            alt={this.props.imageAlt}
          />
        </div>
        <section className="cat-info">
          <li>{this.props.imageNumber}</li>
          <li>{this.props.imageTitle}</li>
        </section>
      </div>
    )
  }
}

export default Cats
