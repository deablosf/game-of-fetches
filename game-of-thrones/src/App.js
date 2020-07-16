import React from 'react';
import './App.css';
import axios from 'axios';

const ANS1 = "http://anapioficeandfire.com/api/characters/16"
const ANS2 = "http://www.anapioficeandfire.com/api/houses/378"
const ANS3 = "http://www.anapioficeandfire.com/api/houses/229"
const ANS4 = "http://www.anapioficeandfire.com/api/houses/17"
const ANS5 = "http://www.anapioficeandfire.com/api/characters/901"
const ANS6 = "https://www.anapioficeandfire.com/api/characters/209"
const ANS7 = "https://anapioficeandfire.com/api/books/1"
const ANS8 = "https://anapioficeandfire.com/api/books/2"
const ANS9 = "https://anapioficeandfire.com/api/books/3"

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      
      info1: [],
      info2: [],
      info3: [],
      info4: [],
      info5: [],
      info6: [],
      info7: [],
      info8: [],
      info9: [],
    }
  }

  async getChara() {
    try {
        const res1 = await axios.get(ANS1);
        const res2 = await axios.get(ANS2);
        const res3 = await axios.get(ANS3);
        const res4 = await axios.get(ANS4);
        const res5 = await axios.get(ANS5);
        const res6 = await axios.get(ANS6);
        const res7 = await axios.get(ANS7);
        const res8 = await axios.get(ANS8);
        const res9 = await axios.get(ANS9);
        
        console.log(res7.data, "I am the API Call");
        this.setState({info1: res1.data});
        this.setState({info2: res2.data});
        this.setState({info3: res3.data});
        this.setState({info4: res4.data});
        this.setState({info5: res5.data});
        this.setState({info6: res6.data});
        this.setState({info7: res7.data});
        this.setState({info8: res8.data});
        this.setState({info9: res9.data});
    } catch(e) {
        console.log(e.message);
    }
}

  componentDidMount() {
    this.getChara() 
  }

  

  render () {
    return (
      <div className="App">
        <h1>Game of Thrones</h1>
        <p>Q1: What region is House Targaryen in?</p>
        <h4>{this.state.info1.culture}</h4>

        <p>Q2: What region is House Targaryen in?</p>
        <h4>{this.state.info2.region}</h4>

        <p>Q3: What's the coat of arms of House Lannister?</p>
        <h4>{this.state.info3.coatOfArms}</h4>

        <p>Q4: What is the second seat of House Baratheon?</p>
        <h4>{this.state.info4.seats}</h4>

        <p>Q5: What is Robert Baratheon's second alias?</p>
        <h4>{this.state.info5.aliases}</h4>

        <p>Q6: What's the name of the founder of House Stark? (You have to chain fetch requests!)</p>
        <h4>{this.state.info6.name}</h4>

        <p>Q7: What are the titles of Catelyn Stark's three POV books? </p>
        <h4>{this.state.info7.name}</h4> 
        <h4>{this.state.info8.name}</h4>
        <h4>{this.state.info9.name}</h4>

      </div>
    );
    }
}

export default App;
