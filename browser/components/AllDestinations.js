import React, { Component } from 'react'

export default class AllDestinations extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     destinations: []
  //   }
  // }

  // componentDidMount() {
  //   axios.get('/api/destinations')
  //     .then(res => res.data)
  //     .then(destinations => {
  //       this.setState({ destinations })
  //     })
  // }

  render() {

    // const destinations = this.state.destinations;

    return(

      <h1>All Destinations</h1>

      // <div>

      // <div>
      //    <div className="feed">
      //     {
      //       destinations.map(destination => {
      //         <div className="each-feed" key={ destination.id }>
      //           <Link to={`/destinations/${destination.id}`}>
      //             <img src={ destination.imageUrl }/>
      //             <div className="each-feed-name">
      //               <h4>{ destination.name }</h4>
      //             </div>
      //           </Link>
      //         </div>
      //       })
      //     }
      //   </div>
      // </div>
      // </div>
    )
  }

}
