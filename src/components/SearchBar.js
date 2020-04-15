import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchForm">
                <form>
                    <input
                        placeholder="Search for..."
                        value={this.props.query}
                        onChange={this.props.handleInputChange}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar