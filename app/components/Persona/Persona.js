import React, { Component } from 'react';
import Generic from './Generic';
import New from './New';
import Returning from './Returning';

class Persona extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <h3 className="p-2">High Value Customer Persona</h3>
          <div className="col-12">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="generic-tab" data-toggle="pill" href="#generic" role="tab" aria-controls="generic" aria-selected="true">Generic</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-tab" data-toggle="pill" href="#new" role="tab" aria-controls="new" aria-selected="false">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="returning-tab" data-toggle="pill" href="#returning" role="tab" aria-controls="returning" aria-selected="false">Returning</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="generic" role="tabpanel" aria-labelledby="generic-tab">
              <Generic />
              </div>
              <div className="tab-pane fade" id="new" role="tabpanel" aria-labelledby="new-tab">
              <New />
              </div>
              <div className="tab-pane fade" id="returning" role="tabpanel" aria-labelledby="returning-tab">
              <Returning />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Persona;