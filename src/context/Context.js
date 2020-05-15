import React, { Component } from 'react';

export const Context = React.createContext({})

export class ContextProvider extends Component {

  state = {
    showInput: false,
    showPoints: false,
    showimage: false,
    newRenderImage: {
      index: "",
      img: "",
      name: ""
    },
  }

  changeMoodHandler = () => {
    this.setState({ showInput: !this.state.showInput })
  }

  changePointsHandler = () => {
    this.setState({ showPoints: !this.state.showPoints })
  }

  changeImageHandler = (index, img, name) => {
    const showImageNew = { index, img, name }
    this.setState({ newRenderImage: showImageNew })
    this.setState({ showimage: !this.state.showimage })
  }

  render() {
    return (
      <>
        <Context.Provider value={{
          showInput: this.state.showInput,
          showPoints: this.state.showPoints,
          showimage: this.state.showimage,
          newRenderImage: this.state.newRenderImage,
          changeMoodHandler: this.changeMoodHandler,
          changePointsHandler: this.changePointsHandler,
          changeImageHandler: this.changeImageHandler
        }}>

          {this.props.children}

        </Context.Provider>
      </>
    )
  }
}

export const ContextConsumer = Context.Consumer;