import React from "react";

// Creating a Form component
class Form extends React.Component{

    render(){
        // Uses regular HTML tags to build up a customized and reusable Form component
        // Defines a prop called loadWeather (this.props.loadWeather)
        //  that will be passed in as the function to complete onSubmit of the form,
        // In App.js, see this component being used with a prop being passed in!
        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="zip" placeholder="Zip..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <button>Get Weather</button>
                </form>

        )
    }
}

export default Form;
