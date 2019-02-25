import React, { Component } from 'react';
import { Grid, Segment, List, Header} from 'semantic-ui-react'

class Draw extends Component {
  render(){

    const groupList = this.props.group.map((el,ind)=>{
      return <List.Item key={ind}>{el}</List.Item>
    });

    return (
      <Grid.Column>
        <Segment>
          <Header as='h1'>{this.props.name} {this.props.index}</Header>
          <List ordered>
            {groupList}
          </List>
        </Segment>
      </Grid.Column>

    );
  }

}


export default Draw;
