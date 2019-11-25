import React from 'react';
import Header from "./components/header";
import Section from "./components/section"
import Tile from "./components/image"
import tiles from "./tiles.json";
import userInfo from "./userInfo.json";
import "./styles/App.css";

class App extends React.Component {
  state = {
    tiles, userInfo, isColored: true || false
  };
  selectTile = id => {
    const tilesFilter = this.state.tiles.filter(tile => tile.id === id);
    if (tilesFilter[0].selected === false) {
      this.setState(prevState => ({
        userInfo: [
          ...prevState.userInfo,
          prevState.userInfo[1].greeting = "Correct!",
          prevState.userInfo[0].score += 1,
          prevState.isColored = true
        ]
      }))
      tilesFilter[0].selected = true;
      if (this.state.userInfo[0].score >= this.state.userInfo[0].highScore) {
        this.setState(prevState => ({
          userInfo: [
            ...prevState.userInfo,
            prevState.userInfo[0].highScore = this.state.userInfo[0].score,
          ]
        }))
      }
    } else {
      for (let i = 0; i < this.state.tiles.length - 1; i++) {
        this.setState(prevState => ({
          tiles: [
            ...prevState.tiles,
            prevState.tiles[i].selected = false
          ]
        }))
      }

      this.setState(prevState => ({
        userInfo: [
          ...prevState.userInfo,
          prevState.userInfo[1].greeting = "Incorrect",
          prevState.userInfo[0].score = 0,
          prevState.isColored = false
        ]
      }))

    };
    this.shuffle();
  };
  shuffle = () => {
    let tempArr = this.state.tiles.slice();
    for (let i = tempArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    this.setState({ tiles: tempArr });
  };

  handleClick = () => {
    this.setState({ condition: !this.state.condition });
  }
  render() {
    return (
      <div>
        <Header
          isColored={this.state.isColored}
        />
        <Section>
          {this.state.tiles.map(tile => (
            <Tile
              key={tile.id}
              id={tile.id}
              image={tile.image}
              selected={tile.selected}
              selectTile={this.selectTile}
              shuffle={this.shuffle}
            />
          ))}
        </Section>
      </div>
    );
  }
}

export default App;
