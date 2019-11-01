import React  from 'react';


class Form extends React.Component {
    render() {
       
        return (
            <div className="form_container" >
                <form onSubmit={this.props.getWeather}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            name="city" 
                            placeholder="Search for your city..." 
                            className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-light">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;