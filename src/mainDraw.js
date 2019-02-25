import React, { Component } from 'react';
import { Grid, Button} from 'semantic-ui-react'
import Draw from './draw.js'

class MainDraw extends Component {

  state = {
    draw1: ['Soccer Punch', 'Orły Wrocław', 'Alkopoligamia','Przyjaciele z Boiska', 'Fc Śródmieście Team'],
    draw2: ['Spartan Błonie', 'Sancho Panza', 'FC Turbojulita','Kłosdipns', 'Red Devils Wrocław'],
    draw3: ['LGW Stare Miasto', 'Fuga Team', 'Radosny Rabarbar','Tiki-Laga', 'STL&LS'],
    draw4: ['Reqiro CF', 'księżniczki szczepin', 'PD WildBoars','Wataha Alfa', 'Wrocław Roosters','Kozanów Team'],
    poolA: [],
    poolB: [],
    poolC: [],
    poolD: [],
    group: [1,2,3,4],
  }

  randomGroup = () => {
    let groupName=0;
    if(this.state.group.length===1){
      this.setState({
        group: [1,2,3,4],
      })
    } else {
      groupName = Math.floor(Math.random() * this.state.group.length);
      this.setState({
        group: this.state.group.filter((groupNumber,index) => index !== groupName),
      })
    }

    return this.state.group[groupName];
  }

  handleClick = () => {

    const group = this.randomGroup();

    if(this.state.draw1.length!==0){
      const team = this.state.draw1[Math.floor(Math.random()*this.state.draw1.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw1: this.state.draw1.filter(teamName => teamName !== team),
        })
      }
    } else if(this.state.draw2.length!==0){
      const team = this.state.draw2[Math.floor(Math.random()*this.state.draw2.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw2: this.state.draw2.filter(teamName => teamName !== team),
        })
      }
    } else if(this.state.draw3.length!==0){
      const team = this.state.draw3[Math.floor(Math.random()*this.state.draw3.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw3: this.state.draw3.filter(teamName => teamName !== team),
        })
      }
    } else if(this.state.draw4.length!==0){
      const team = this.state.draw4[Math.floor(Math.random()*this.state.draw4.length)];
      if(group===1){
        this.setState({
          poolA: [...this.state.poolA,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      } else if (group===2){
        this.setState({
          poolB: [...this.state.poolB,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      } else if (group===3){
        this.setState({
          poolC: [...this.state.poolC,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      } else if (group===4){
        this.setState({
          poolD: [...this.state.poolD,team],
          draw4: this.state.draw4.filter(teamName => teamName !== team),
        })
      }
    }

  }



  render() {

    return (
      <div className={"container"}>
        <Grid columns='equal'>
        <Grid.Row>
          <Draw index={1} group={this.state.draw1} name={"Koszyk"}/>
          <Draw index={2} group={this.state.draw2} name={"Koszyk"}/>
          <Draw index={3} group={this.state.draw3} name={"Koszyk"}/>
          <Draw index={4} group={this.state.draw4} name={"Koszyk"}/>
        </Grid.Row>
        </Grid>

        <Grid columns='equal'>
        <Grid.Row>
          <Draw index={"A"} group={this.state.poolA} name={"Grupa"}/>
          <Draw index={"B"} group={this.state.poolB} name={"Grupa"}/>
          <Draw index={"C"} group={this.state.poolC} name={"Grupa"}/>
          <Draw index={"D"} group={this.state.poolD} name={"Grupa"}/>
        </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Column textAlign="center">
            <Button color='blue' attached='bottom' onClick={this.handleClick}>Losuj</Button>
          </Grid.Column>
        </Grid>
      </div>

    );
  }
}

export default MainDraw;
