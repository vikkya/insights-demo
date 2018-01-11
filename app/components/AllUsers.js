import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryBar, VictoryLegend, VictoryAxis } from 'victory';
class AllUsers extends Component {
  render() {
    return (
      <div className="container">
     
        <div className="row">

          <div className="col-4">
            <p className="font-weight-normal">Devices</p>
            <svg width={300} height={200}>
              <VictoryPie standalone={false}
                innerRadius={50}
                width={300} height={200}
                padding={{
                  left: 0, bottom: 20, top: 20, right: 100
                }}
                colorScale={["#ff6384", "#36a2eb", "#4bc0c0"]}
                data={[
                  { x: "Desktop", y: 35 },
                  { x: "Tablet", y: 40 },
                  { x: "Mobile", y: 55 }
                ]}
                labels={() => null}
              />
              <VictoryLegend standalone={false}
                colorScale={["#ff6384", "#36a2eb", "#4bc0c0"]}
                x={220} y={50}
                gutter={20}
                centerTitle
                orientation="vertical"
                data={[
                  { name: "Desktop" }, { name: "Tablet" }, { name: "Mobile" }
                ]}
              />
            </svg>
          </div>
          <div className="col-4">
            <p className="font-weight-normal">Geo Location</p>
            <table className="table">
              <thead>
                <tr className="font-weight-light">
                  <th >State</th>
                  <th >Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>NJ</th>
                  <td>02</td>

                </tr>
                <tr>
                  <th>TX</th>
                  <td>01</td>

                </tr>
                <tr>
                  <th>CA</th>
                  <td>03</td>

                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <p className="font-weight-normal">Browser</p>
            <VictoryChart domainPadding={{ y: 10 }}
            >
              <VictoryBar horizontal
                style={{
                  data: { fill: "#DE893E" }
                }}
                data={[
                  { x: "Chrome", y: 35 },
                  { x: "Firefox", y: 40 },
                  { x: "IE", y: 55 },
                  { x: "Others", y: 55 }
                ]}
              />
              <VictoryAxis
                tickValues={['Chrome', 'Firefox', 'IE', 'Others']}
                style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'black',fontSize: 10 } }}
                dependentAxis
              />
            </VictoryChart>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p className="font-weight-normal">Day of Week</p>
            <VictoryChart domainPadding={10}>
              <VictoryBar
                style={{ data: { fill: "#DE893E" } }}
                data={[
                  { x: "M", y: 35 },
                  { x: "T", y: 40 },
                  { x: "W", y: 55 },
                  { x: "TH", y: 55 },
                  { x: "F", y: 12},
                  { x: "S", y:60},
                  { x: "SU", y: 56}
                ]}
              />
            </VictoryChart>
          </div>
          <div className="col-4">
            <p className="font-weight-normal">Hour of Day</p>
            <VictoryChart domainPadding={10}>
              <VictoryBar
                style={{ data: { fill: "#DE893E" } }}
                data={[
                  { x: "00", y: 35 },
                  { x: "01", y: 40 },
                  { x: "02", y: 55 },
                  { x: "03", y: 55 },
                  { x: "04", y: 12},
                  { x: "05", y:60},
                  { x: "06", y: 56},
                  { x: "07", y: 40 },
                  { x: "08", y: 55 },
                  { x: "09", y: 55 },
                  { x: "10", y: 12},
                  { x: "11", y:60},
                  { x: "12", y: 56},
                  { x: "13", y: 35 },
                  { x: "14", y: 40 },
                  { x: "15", y: 55 },
                  { x: "16", y: 55 },
                  { x: "17", y: 12},
                  { x: "18", y:60},
                  { x: "19", y: 56},
                  { x: "20", y: 40 },
                  { x: "21", y: 55 },
                  { x: "22", y: 55 },
                  { x: "23", y: 12}
                  
                ]}
              />
            </VictoryChart>
          </div>
          <div className="col-4">
            <p className="font-weight-normal">Product</p>
            <VictoryChart domainPadding={{ y: 5 }}
            >
              <VictoryBar horizontal
                style={{
                  data: { fill: "#DE893E" }
                }}
                data={[
                  { x: "Pro #1", y: 35 },
                  { x: "Pro #2", y: 40 },
                  { x: "Pro #3", y: 55 }
                ]}
              />
              <VictoryAxis
                tickValues={['Pro #1', 'Pro #2', 'Pro #3']}
                style={{ axis: { stroke: 'white' }, tickLabels: { fill: 'black', fontSize: 12 } }}
                dependentAxis
              />
            </VictoryChart>
          </div>
        </div>
        <p className="font-weight-normal">Key Takeaways</p>
        <div className="row">
        
          <div className="col-4">
          <p><i className="fa fa-internet-explorer" aria-hidden="true" style={{color:'#02bdf2'}}></i> &nbsp;IE Shares went down by 10% &darr;</p>
          <p><i className="fa fa-desktop" aria-hidden="true"></i> &nbsp;Desktop Shares went up by 25% &uarr;</p>
          </div>
          <div className="col-4 border border-dark border-top-0 border-bottom-0">
          <h3 className="text-center">Product #1</h3>
          <p>Most popular among both types of customers</p>
          </div>
          <div className="col-4">
          <p><i className="fa fa-calendar-minus-o" aria-hidden="true"></i> &nbsp;35% chance of buying on <b  style={{color: 'black'}}>Wednesday</b> which is highest of all days of week</p>
          <p><i className="fa fa-clock-o" aria-hidden="true"></i> &nbsp;Most likely to buy between <b style={{color: 'black'}} >6PM-8PM</b></p>
          </div>
        </div>
      </div>
    )
  }
}

export default AllUsers;