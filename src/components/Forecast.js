import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Forecast extends Component {
    render () {
        // ${this.state.icon}
        const iconURL = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`
        return (
            <div>
                {this.props.city &&
                <div className="forecast_item">
                    <div className="forecast_date">
                        {this.props.date && <h3>{this.props.date}</h3>}
                    </div>
                    <div>
                        {this.props.icon && <img src={iconURL} alt={this.props.icon} className="forecast_img" />}
                    </div>
                    <div className="forecast_desc">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 temp_icon-fc">
                        {this.props.temperature &&  <span><FontAwesomeIcon icon={['fas', 'temperature-high']} />: {this.props.temperature} °C</span> }
                        </div>
                        <div className="col-md-6 humid_icon-fc">
                        {this.props.humidity &&  <span><FontAwesomeIcon icon={['fas', 'tint']} />: {this.props.humidity} %</span> }
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
export default Forecast;