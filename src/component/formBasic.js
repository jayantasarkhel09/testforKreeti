import { Line } from 'rc-progress';
import React, { Component } from 'react';
import Business from './Business';
import Education from './Education';
import PersonalDetails from './PersonalDetails';



export class formBasic extends Component {
  state = {
    step: 1,
    name: '',
    age: '',
    mobile: '',
    educationDetails:[],
    business: [],
  
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change
  handleChange =  e => {
      
    this.setState({ [e.target.name]: e.target.value });
    console.log("this.state",this.state);
  };

  render() {
    const { step } = this.state;
    const { name,age,mobile,educationDetails,business } = this.state;
    
    
    switch (step) {
      case 1:
        return (
            <>
            <Line percent="30" strokeWidth="1" strokeColor="red" />
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            
          />
          </>
        
        );
      case 2:
        return (
            <>
            <Line percent="70" strokeWidth="1" strokeColor="blue" />
          <Education
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
           
          />
          </>
        );
      case 3:
        return (
            <>
            <Line percent="100" strokeWidth="1" strokeColor="yellow" />
          <Business
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
          </>
        
        );
      case 4:
        return <>
        </>;
      default:
        (console.log('This is a multi-step form built with React.'))
       
    }
    
  }
}

export default formBasic;
