import React, { Component } from 'react';
import { Input, Button, Select, Label } from 'semantic-ui-react'
import Draw from './draw.js'

class CreatePools extends Component {

  state = {
    teamName: "",
    value: 1,
    number: 3,
    options: [],
    draw1: [],
  }

  componentWillMount(){
    let optionss=[];
    for(let i=1;i<=parseInt(this.state.number);i++){
          optionss=[...optionss,{key: i, text: i, value: i, teams: []}];
    }
    this.setState({
      options: optionss,
    });
  }

  handleOnChange = (e) => {
    this.setState({
      teamName: e.target.value,
    })
  }

  handleSelectChange = (event,data) => {
    this.setState({
      value: data.value,
    })
  }

  handleOnClick = () => {
    if(this.state.teamName.length>0){
      let team = this.state.teamName;
      let option = this.state.options;
      option[this.state.value-1].teams=[...option[this.state.value-1].teams,team];
      console.log(option);
      this.setState({
        options: option,
        teamName: "",
        value: 1,
      })
    }
  }

  render() {

    const draws = this.state.options.map((el,index)=>{
      return <Draw key={index} index={index+1} group={this.state.options[index].teams} name={"Koszyk"}/>
    })

    return (
      <div className={"createContainer"}>
        <div className={"poolContainer"}>
          {draws}
        </div>

        <div className = {"formContainer"}>
          <Input type='text' placeholder='Podaj nazwę drużyny' onChange={this.handleOnChange} action value={this.state.teamName} />
          <div>
          <Label size={"big"}>Wybierz grupę</Label>
          <Select compact onChange={ this.handleSelectChange} options={this.state.options} value={this.state.value} />
          </div>
          <Button onClick={this.handleOnClick}>Dodaj drużynę</Button>
        </div>
      </div>



    );
  }
}

export default CreatePools;
