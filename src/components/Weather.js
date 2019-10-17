import React, {Component} from 'react';

class Weather extends Component {
    
    render() {
        return (
            <div className="weather__info">
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Description: {this.props.description}</p>}
                {this.props.main && <p>{this.props.main}</p>}
                {this.props.error && <p>Error: {this.props.error}</p>}
            </div>
        );
    }
}
export default Weather;