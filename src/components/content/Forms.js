import React from 'react'
import TableInfo from './TableInfo'


class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            city: '', location: '', country: '', iconeDay: '', hum: '', speed: '', lon: '',
            lat: '', temp: 0, description: '', disp: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleSubmit(event) {

        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&appid=2a310140ac3386500bd8746bef37c9a0")
            .then(response => response.json())
            .then(data => {

             

                if (data.name != null) {
            
                    this.setState({
                        disp: true,
                        temp: data.main.temp - 273.15,
                        lon: data.coord.lon,
                        lat: data.coord.lat,
                        speed: data.wind.speed,
                        hum: data.main.humidity,
                        location: data.name,
                        iconeDay: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png',
                        description: data.weather[0].description,
                     

                    })

                }
            

                else { alert('aucune info pour ce lieu :  ' + this.state.city) }
                console.log(this.state.disp)
            })

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="hero" data-bg-image={process.env.PUBLIC_URL + '/ressources/images/banner.png'}>
                    <div className="container">
                        <form onSubmit={this.handleSubmit} className="find-location">
                            <input type="text" name="city" onChange={this.handleChange} placeholder="Find your Weather's City..." />
                            <input type="submit" value="Find" />
                        </form>
                    </div>
                </div>
                <TableInfo
                    dispo={this.state.disp}
                    location={this.state.location}
                    hum={this.state.hum}
                    speed={this.state.speed}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    description={this.state.description}
                    temp={this.state.temp}
                    iconeDay={this.state.iconeDay}
                />
            </div>
        )
    }
}
export default Forms
