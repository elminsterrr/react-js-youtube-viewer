import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleInputChange(term) {
    this.setState({ searchTerm: term });
    this.props.handleSearchQueryChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={event => this.handleInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
