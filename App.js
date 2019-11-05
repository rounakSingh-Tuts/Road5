import React, { Component } from "react";

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = searchTerm => item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends Component {
  constructor() {
    this.state = ({
      list,
      searchTerm: ''
    })

    this.onDismiss = this.onDismiss.bind(this);
    this.clickMe = this.clickMe.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID != id);
    this.setState({
      list: updatedList
    })
  }

  clickMe() {
    alert('CLICKED')
  }

  searchTerm(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    const { searchTerm, list } = this.state
    return (
      <div>
        <Search 
          value = {searchTerm}
          onChange = {this.searchTerm} >
          SEARCH
        </Search>
        {
          list.filter(isSearched(searchTerm)).map(item => 
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
                <button type="button" onClick={() => this.onDismiss(item.objectID)}>
                  Dismiss
                </button>
                <button type="button" onClick={() => this.clickMe()}>ClickMe</button>
              </span>
            </div>
          )
        }
      </div>
    )
  }
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <div>
         <form>
          {children}<input 
            type="text" 
            value={value}
            onChange={onChange} />
        </form>
      </div>
    )
  }
}

export default App

