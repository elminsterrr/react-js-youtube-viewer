import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={event => this.handleInputChange(event.target.value)} />
      </div>
    );
  }

  handleInputChange(term) {
    this.setState({searchTerm: term});
    this.props.handleSearchQueryChange(term);
  }
}

export default SearchBar;
