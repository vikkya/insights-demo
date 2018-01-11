import React, { Component } from 'react';
import '../style.css';
import Overview from './Overview';
import Persona from './Persona/Persona';
import Journey from './Journey';
class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row main-row">
                    <div className="col-2 col-bg">

                        <div className="nav flex-column nav-pills sidebar-link" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active text-center sidebar" id="overview-tab" data-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">
                                <img src="../../imgs/overview.svg" />
                                <p className="font-weight-bold">Overview</p>
                            </a>
                            <a className="nav-link text-center sidebar" id="persona-tab" data-toggle="pill" href="#persona" role="tab" aria-controls="persona" aria-selected="false">
                                <img src="../../imgs/persona.svg" />
                                <p className="font-weight-bold">Persona</p>
                            </a>
                            <a className="nav-link text-center sidebar" id="journey-tab" data-toggle="pill" href="#journey" role="tab" aria-controls="journey" aria-selected="false">
                                <img src="../../imgs/journey.svg" />
                                <p className="font-weight-normal">Journey</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                            <Overview />
                            </div>
                            <div className="tab-pane fade" id="persona" role="tabpanel" aria-labelledby="persona-tab">
                            <Persona />
                            </div>
                            <div className="tab-pane fade" id="journey" role="tabpanel" aria-labelledby="journey-tab">
                            <Journey />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Main;