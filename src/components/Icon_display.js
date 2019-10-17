import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IconDisplay extends Component {
    
    render() {
        const condition = this.props.main;
        let condition_icon;
        switch (condition) {
            case 'Clouds':
                condition_icon = <FontAwesomeIcon icon={['fas', 'cloud']} />;
                break;
            case 'Thunderstorm':
                condition_icon = <FontAwesomeIcon icon={['fas', 'bolt']} />;
                break;
            case 'Drizzle':
                condition_icon = <FontAwesomeIcon icon={['fas', 'cloud-showers-heavy']} />;
                break;
            case 'Rain':
                condition_icon = <FontAwesomeIcon icon={['fas', 'cloud-rain']} />;
                break;
            case 'Snow':
                condition_icon = <FontAwesomeIcon icon={['fas', 'snowflake']} />;
                break;
            case 'Atmosphere':
                condition_icon = <FontAwesomeIcon icon={['fas', 'smog']} />;
                break;
            case 'Clear':
                    condition_icon = <FontAwesomeIcon icon={['fas', 'sun']} />;
                    break;
            case 'Mist':
                condition_icon = <FontAwesomeIcon icon={['fas', 'smog']} />;
                break;
            default:
                condition_icon = <p></p>;
                break;
        }
        return (
            <div className="weather__icon">
                <div className="row">
                    <div className=" col-md-12 condition">
                        <div className="condition_icon">{condition_icon}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 temp_icon">
                        {this.props.temperature &&  <span><FontAwesomeIcon icon={['fas', 'temperature-high']} />: {this.props.temperature} °C</span> }
                    </div>
                    <div className="col-md-6 humid_icon">
                    {this.props.humidity &&  <span><FontAwesomeIcon icon={['fas', 'tint']} />: {this.props.humidity} %</span> }
                    </div>
                </div>
            </div>
        );
    }
}
export default IconDisplay;