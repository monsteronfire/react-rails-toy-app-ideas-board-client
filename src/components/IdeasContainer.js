import React, { Component } from 'react';
import Idea from './Idea';
import axios from 'axios';

class IdeasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/v1/ideas.json')
      .then((response) => {
        console.log(response);
        this.setState({
          ideas: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="IdeasContainer">
        {this.state.ideas.map((idea) => {
          return (
            <Idea idea={idea} key={idea.id} />
          )
        })}
      </div>
    );
  }
}

export default IdeasContainer;
