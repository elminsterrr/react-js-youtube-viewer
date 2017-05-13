import _ from 'lodash';
import '../scss/main.scss';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyAhPJVZiKzkLrGrQbncaQoHIJzOnDk-jyo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      userQuery: ''
    };
  }

  videoSearch(userQuery) {
    if (userQuery === '') {
      this.setState({
        videos: [],
        selectedVideo: null,
        userQuery: ''
      });
    } else {
      YTSearch({key: API_KEY, term: userQuery}, (ytData) => {
        this.setState({
          videos: ytData,
          selectedVideo: ytData[0],
          userQuery: userQuery
        });
      });
    }
  }

  render() {
    const videoSearchDebounced = _.debounce(query => this.videoSearch(query), 500);
    return (
      <div>
        <SearchBar handleSearchQueryChange={videoSearchDebounced} />
        <VideoDetail
          chosenClip={this.state.selectedVideo}
          userQuery={this.state.userQuery} />
        <VideoList
          handleVideoSelect_2={selected => this.setState({selectedVideo: selected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.app'));

// handleVideoSelect_0(clip) przekazuje w górę
// z <VideoListItem /> poprzez <VideoList /> do <App />
// obiekt zawierajacy dane jednego konkretnego filmu.

// Następnie obiekt ten zostaje zapisany do stanu (this.setState)
// komponentu <App />, co wywołuje ponowne zrenderowanie przez
// React całego komponentu <App />.

// W związku z tym zostaje zrenderowany VideoDetail, do którego jako props zostają przekazane
// dane nowego obiektu z nowym filmem, który zostaje finalnie wyświetlny użytkownikowi.
