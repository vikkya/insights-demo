import React, { Component } from 'react';
import '../../style.css';

class Generic extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 pt-5">
            <p className=""><img src="../../imgs/dollar.svg" style={{ width: '20px', height: '20px' }} /> &nbsp; Monthly purchases are above $200.</p>
            <p className="pt-5"><i className="fa fa-eye fa-1x" aria-hidden="true" ></i> &nbsp; She visits the website 10-15 times a month.</p>
            <p className="pt-5"><i className="fa fa-shopping-bag" aria-hidden="true"></i> &nbsp; Her bag value amounts to $160.</p>
            <p className="pt-5"><i className="fa fa-bullseye" aria-hidden="true"></i>&nbsp; She purchases 3-4 items in a order.</p>
           
          </div>
          <div className="col-md-3 text-center align-middle">
            <img src="../../imgs/lady.svg" />
            <b>Returning Customer</b><br />
            <b>Age 25-35</b><br />
            <p><img src="../../imgs/map.svg" /> &nbsp; California</p>
          </div>
          <div className="col-md-4">
            <div className="card border-light " >
              <div className="card-header"><i className="fa fa-desktop fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Desktop</b> </div>
              <div className="card-body">

                <div className="card-text">
                <table className="table">
                <tbody>
                <tr style={{borderTop: '0 !important'}}>
                  <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                  <td>Most likely to buy between 2PM to 5PM.</td>
                </tr>
                <tr>
                  <td className="align-middle"><i className="fa fa-bullhorn" aria-hidden="true"></i></td>
                  <td>1% chance of buying from paid campaign.</td>
                </tr>
                <tr>
                  <td className="align-middle"><i className="fa fa-calendar-o" aria-hidden="true"></i></td>
                  <td>16% chance of buying on Friday which is highest among all days of week.</td>
                </tr>
                </tbody>
                </table>
                
                </div>
              </div>
            </div>
            <div className="card border-light ">
              <div className="card-header"><i className="fa fa-mobile fa-2x align-middle" aria-hidden="true"></i> <b>Behaviour on Mobile</b></div>
              <div className="card-body">
                <div className="card-text">
                <table className="table">
                <tbody>
                <tr style={{borderTop: '0 !important'}}>
                  <td className="align-middle"><i className="fa fa-clock-o" aria-hidden="true"></i></td>
                  <td>Most likely to buy between 4PM to 6PM.</td>
                </tr>
                <tr>
                  <td className="align-middle"><i className="fa fa-bullhorn" aria-hidden="true"></i></td>
                  <td>3% chance of buying from paid campaign.</td>
                </tr>
                <tr>
                  <td className="align-middle"><i className="fa fa-calendar-o" aria-hidden="true"></i></td>
                  <td>15% chance of buying on Monday which is highest among all days of week.</td>
                </tr>
                </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Generic;