import React, {Component} from 'react';

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img className="" src="../../imgs/lxr.png" />&nbsp;<img className="" src="../../imgs/insights.png" /></a>
  <hr/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Elf Cosmetics <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <a className="nav-link my-2 my-sm-0" href="#"><i className="fa fa-external-link" aria-hidden="true"></i> &nbsp;Logout <span className="sr-only">(current)</span></a>
      
    </form>
  </div>
</nav>
    )
  }
}
export default Navbar;