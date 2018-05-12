import React from 'react'
import ReactDOM from 'react-dom'

const Most = (props) => {
    var isoin = 0
    var isop = 0
    for (var i=0; i<6; i++ ){
        console.log(props.pisteet[i])
        if (props.pisteet[i] > isoin) {
            isop = i
        }
    }
    return (
        <div>
            <h1>anecdote with most votes:</h1>
            <p>{props.anecdotes[isop]}</p>
            <p>has {props.pisteet[isop]} votes</p>
        </div>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: {0: 0, 1:0, 2: 0, 3: 0, 4: 0, 5: 0 }
    }
  }

  change = () => {
      this.setState({selected: Math.floor(Math.random() * 6)})
  }

  vote = () => {
      const kopio = {...this.state.pisteet}
      kopio[this.state.selected] += 1
      this.setState({pisteet: kopio })
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>Has {this.state.pisteet[this.state.selected]} votes</p>
        <button onClick={this.vote}>vote</button>
        <button onClick={this.change}> next anecdote</button>
        <Most pisteet={this.state.pisteet} anecdotes={this.props.anecdotes}/>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)