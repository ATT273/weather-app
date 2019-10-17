import React  from 'react';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import IconDisplay from './components/Icon_display';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);
const API_KEY = 'a1f79205a87d7dfeaf057c1425dea977';

class App extends React.Component {
	
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		main: undefined,
		error: undefined
	}
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const weather_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		const forecast_api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
		const weather_data = await weather_api.json();
		const forecast_data = await forecast_api.json();
		console.log(forecast_data);

		if(city){
			if(weather_data.cod === 404){
				this.setState({
					temperature: undefined,
					city: undefined,
					country: undefined,
					humidity: undefined,
					description: undefined,
					main:undefined,
					error: weather_data.message
				});
			} else {
				console.log(weather_data);
				this.setState({
					temperature: weather_data.main.temp,
					city: weather_data.name,
					country: weather_data.sys.country,
					humidity: weather_data.main.humidity,
					description: weather_data.weather[0].description,
					main: weather_data.weather[0].main,
					error: ""
				});
			}
			
		}else {
			console.log(weather_data);
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				main:undefined,
				error: "Please enter city and country"
			});
		}
		
	}
	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="">
							<div className="row">
								<div className="col-xs-5 col-md-5 title-container">
									<Title/>
								</div>
								<div className="col-xs-7 col-md-7 form-container">
									<div className="row">
										<div className="col-md-12">
											<Form getWeather={this.getWeather}/>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<Weather
											temperature={this.state.temperature}
											city={this.state.city}
											country={this.state.country}
											humidity={this.state.humidity}
											description={this.state.description}
											error={this.state.error}
											/>
										</div>
										<div className="col-md-6">
											<IconDisplay
											temperature={this.state.temperature}
											city={this.state.city}
											country={this.state.country}
											humidity={this.state.humidity}
											description={this.state.description}
											main={this.state.main}
											error={this.state.error}
											/>
										</div>
									</div>
									
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
