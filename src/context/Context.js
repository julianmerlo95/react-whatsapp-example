import React, { Component } from 'react';

export const Context = React.createContext({})

export class ContextProvider extends Component {

  state = {
    showInput: false,
    showPoints: false
  }

  changeMoodHandler = () => {
    this.setState({ showInput: !this.state.showInput })
  }

  changePointsHandler = () => {
    this.setState({ showPoints: !this.state.showPoints })
  }
  render() {
    return (
      <>
        <Context.Provider value={{
          showInput: this.state.showInput,
          showPoints: this.state.showPoints,
          changeMoodHandler: this.changeMoodHandler,
          changePointsHandler: this.changePointsHandler
        }}>

          {this.props.children}

        </Context.Provider>
      </>
    )
  }
}

export const ContextConsumer = Context.Consumer;