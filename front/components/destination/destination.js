import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import DestinationModal from '../modal/destination-modal';

import '../../styles/destination.css'



class Destination extends Component {
  constructor(props) {
    super(props);
  }

  displayDestination() {
    const { destinations } = this.props.destinations;
    // let dests = destinations.reverse()
    return destinations.map((destination, i) => (
      <div>
      <div className='destContainer' key={'destination-'+i}>
        <Link to={{pathname: 'itinerary/'+destination.id, query: {place: destination.place}}}><div className='destPlace' key={'place-'+i}>{destination.place}</div></Link>
        <div className='destLocation'>
          <div className='iconLocation'></div> <div key={'country-'+i}>{destination.country} </div>
        </div>
        <div className='destClock'>
          <div className='iconClock'></div>
          <div key={'duration-'+i}>{destination.duration} </div>
        </div>

        <div className='destExpense'>
          <div className='iconExpense'></div>
          <div key={'total-'+i}>${destination.total_spent}</div>
        </div>

      </div>
        <hr className='lineBreak' />
      </div>
    ))
  }

  render() {
    console.log('I AM PLACE ===>>>', this.props.params.place)
    if(this.props.profile.id) {
      return (
        <div id='master_itinerary'>
          {this.displayDestination()}
        </div>
      )
    }
    else {
      return (<h2>Loading...</h2>)
    }
  }
}


export default Destination;
