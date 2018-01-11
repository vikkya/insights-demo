import React, { Component } from 'react';
import AllUsers from './AllUsers';
import NewUser from './NewUsers';
import ReturnUsers from './ReturnUsers';
class Overview extends Component {
  render() {
    return (
      <div>
        <h3>Overview</h3>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#allusers" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#newusers" role="tab" aria-controls="pills-profile" aria-selected="false">New</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#returnusers" role="tab" aria-controls="pills-contact" aria-selected="false">Returning</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="allusers" role="tabpanel" aria-labelledby="pills-home-tab">
            <AllUsers />
          </div>
          <div className="tab-pane fade" id="newusers" role="tabpanel" aria-labelledby="pills-profile-tab">
            <NewUser />
          </div>
          <div className="tab-pane fade" id="returnusers" role="tabpanel" aria-labelledby="pills-contact-tab">
            <ReturnUsers />
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;