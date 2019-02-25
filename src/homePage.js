import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react'

class HomePage extends Component {

  state = {
    pools: 0,
  }

  handleOnChange = (e) => {
    let x = parseInt(e.target.value);
    this.setState({
      pools: x,
    })
  }

  handleClick=(e)=>{
    if(this.state.pools>0){
        this.props.history.push('/create');
    }
  }

  render() {

    return (
      <div className = {"formContainer"}>
         <Input onChange={this.handleOnChange} action={<Button color='teal'  content='Zaakceptuj'  onClick={this.handleClick} />} size='huge' color="red"  placeholder='Liczba koszyków...' />
      </div>

    );
  }
}

export default HomePage;
