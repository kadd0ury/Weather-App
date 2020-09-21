import React, { Component } from 'react'

class TableInfo extends Component {

 
    render() {

        let d = new Date();
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday "]
        return (

            <div style={{ display: this.props.dispo ? "block" : "none" }} className="forecast-table">
            <div className="container">
                <div className="forecast-container">
                    <div className="today forecast">
                        <div className="forecast-header">
                            <div className="day">{days[d.getDay()]}</div>
                            <div className="date">{d.toUTCString()}</div>
                        </div>
                        <div className="forecast-content">
                            <div className="location"><img src={process.env.PUBLIC_URL + '/ressources/images/icon-marker.png'}></img> {this.props.location}</div>
                            <span style={{ position: "relative", top: "15px" }} ><img src={process.env.PUBLIC_URL + '/ressources/images/icon-umberella.png'} alt="" />{this.props.hum}%</span><br />
                            <span style={{ position: "relative", top: "30px" }} ><img src={process.env.PUBLIC_URL + '/ressources/images/icon-wind.png'} alt="" />{this.props.speed} km/h</span><br />
                            <span style={{ position: "relative", top: "40px" }} ><img src={process.env.PUBLIC_URL + '/ressources/images/icon-compass.png'} alt=""></img>Lon:{this.props.lon}  ,Lat :{this.props.lat} </span><br />
                            <span style={{ position: "relative", top: "55px" }}>Description : {this.props.description} </span><br />

                            <div style={{ position: "relative", right: "-400px" }} className="degree">
                                <div className="num">{this.props.temp.toFixed(2)}<sup>o</sup>C</div>
                                <div className="forecast-icon">
                                    <img style={{ position: "relative", right: "237px", top: "-71px" }} src={this.props.iconeDay} alt="" width="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
}


export default TableInfo