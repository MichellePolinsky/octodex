import React, { Component } from 'react'
import Cats from './cats'

import collaboCats from '../Images/collabocats.jpg'
import femaleCoder from '../Images/femalecodertocat.png'
import notoCat from '../Images/notocat.jpg'
import octoCat from '../Images/octocat-de-los-muertos 56.jpg'
import octoFez from '../Images/octofez 79.png'
import sentry from '../Images/Sentrytocat_octodex.jpg'

const OctoCats = [
  {
    imageNumber: '#78',
    imageTitle: 'CollaboCats',
    imageAlt: 'CollaboCats',
    imageUrl: collaboCats
  },
  {
    imageNumber: '#98',
    imageTitle: 'FemaleCoder',
    imageAlt: 'FemaleCoder',
    imageUrl: femaleCoder
  },
  {
    imageNumber: '#125',
    imageTitle: 'NotoCat',
    imageAlt: 'NotoCat',
    imageUrl: notoCat
  },
  {
    imageNumber: '#37',
    imageTitle: 'OctoFez',
    imageAlt: 'OctoFez',
    imageUrl: octoFez
  },
  {
    imageNumber: '#45',
    imageTitle: 'SentryCat',
    imageAlt: 'SentryCat',
    imageUrl: sentry
  },
  {
    imageNumber: '#63',
    imageTitle: 'OctoCat',
    imageAlt: 'OctoCat',
    imageUrl: octoCat
  }
]

class DisplayCats extends Component {
  render() {
    return (
      <div>
        {OctoCats.map(OctoCat => {
          return (
            <Cats
              imageNumber={OctoCat.imageNumber}
              imageTitle={OctoCat.imageTitle}
              imageAlt={OctoCat.imageAlt}
              imageUrl={OctoCat.imageUrl}
            />
          )
        })}
      </div>
    )
  }
}

export default DisplayCats
