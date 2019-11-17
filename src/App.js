import React  from 'react';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
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
		forecast:{
			0:{
				temperature:undefined,
				humidity: undefined,
				description: undefined,
				icon: undefined,
				date: undefined
			},
			1:{
				temperature:undefined,
				humidity: undefined,
				description: undefined,
				icon: undefined,
				date: undefined
			},
			2:{
				temperature:undefined,
				humidity: undefined,
				description: undefined,
				icon: undefined,
				date: undefined
			}
		},
		error: undefined
	}
	getForecast = async (e) => {
		
	}

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const weather_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		const weather_data = await weather_api.json();
		
		// console.log(weather_data.message);
		// console.log(forecast_data.message);
		if(city){
			if( weather_data.cod === '404'){
				console.log(weather_data.message);
				this.setState({
					temperature: undefined,
					city: undefined,
					country: undefined,
					humidity: undefined,
					description: undefined,
					main:undefined,
					forecast:{
						0:{
							temperature:undefined,
							humidity: undefined,
							description: undefined,
							icon: undefined,
							date: undefined
						},
						1:{
							temperature:undefined,
							humidity: undefined,
							description: undefined,
							icon: undefined,
							date: undefined
						},
						2:{
							temperature:undefined,
							humidity: undefined,
							description: undefined,
							icon: undefined,
							date: undefined
						}
					},
					error: weather_data.message
				});
			} else {
				console.log(weather_data);
				const forecast_api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
				const forecast_data = await forecast_api.json();
				const date2 = forecast_data.list[8].dt_txt.split(" ")[0];
				const date3 = forecast_data.list[16].dt_txt.split(" ")[0];
				const date4 = forecast_data.list[24].dt_txt.split(" ")[0];
				
				this.setState({
					temperature: weather_data.main.temp,
					city: weather_data.name,
					country: weather_data.sys.country,
					humidity: weather_data.main.humidity,
					description: weather_data.weather[0].description,
					main: weather_data.weather[0].main,
					forecast:{
						0:{
							temperature:forecast_data.list[8].main.temp,
							humidity: forecast_data.list[8].main.humidity,
							description: forecast_data.list[8].weather[0].description,
							date: date2,
							icon: forecast_data.list[8].weather[0].icon
							
						},
						1:{
							temperature:forecast_data.list[16].main.temp,
							humidity: forecast_data.list[16].main.humidity,
							description: forecast_data.list[16].weather[0].description,
							date: date3,
							icon: forecast_data.list[16].weather[0].icon
						},
						2:{
							temperature: forecast_data.list[24].main.temp,
							humidity: forecast_data.list[24].main.humidity,
							description: forecast_data.list[24].weather[0].description,
							date: date4,
							icon: forecast_data.list[24].weather[0].icon
						}
					},
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
				error: "Please enter your city"
			});
		}
		
	}
	
	render() {
		const {forecast:{0:day2,1:day3,2:day4}} = this.state;
		return (
				<div>
					<Header/>
					<div className="container">
						<Form getWeather={this.getWeather}/>
						<Weather
						temperature={this.state.temperature}
						city={this.state.city}
						country={this.state.country}
						humidity={this.state.humidity}
						description={this.state.description}
						main={this.state.main}
						error={this.state.error}
						/>
				
						
						<div className="row">
							<div className="col-md-4 fc-item-container">
								<Forecast
								temperature={day2.temperature}
								humidity={day2.humidity}
								description={day2.description}
								icon={day2.icon}
								date={day2.date}
								city={this.state.city}
								/>
							</div>
							<div className="col-md-4 fc-item-container">
								<Forecast
								temperature={day3.temperature}
								humidity={day3.humidity}
								description={day3.description}
								icon={day3.icon}
								date={day3.date}
								city={this.state.city}
								/>
							</div>
							<div className="col-md-4 fc-item-container">
								<Forecast
								temperature={day4.temperature}
								humidity={day4.humidity}
								description={day4.description}
								icon={day4.icon}
								date={day4.date}
								city={this.state.city}
								/>
							</div>
						</div>
					</div>
					{this.state.city &&
					<div className="bottom-grad">
					</div>
					}
									
				</div>

		);
	}
}

export default App;
