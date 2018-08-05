import React from 'react';
import ReactDOM from 'react-dom';

import { GithubSvc } from './github-svc.js';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            list: [],
            expanded: null,
            searching: false,
            friendlyMessage: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleExpanded(url) {
        let expanded = null;

        if (this.state.expanded !== url) {
            expanded = url;
        }

        this.setState({ expanded: expanded });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.keyword && !this.state.searching) {
            this.setState({ searching: true, friendlyMessage: '' }, () => {
                GithubSvc.search(this.state.keyword).then(
                    (response) => {
                        this.setState(() => {
                            let newState = {
                                searching: false,
                                list: response.data.repositories,
                                keyword: ''
                            };

                            if (!response.data.repositories.length) {
                                newState.friendlyMessage = 'Bummer! No repositories matched your search. Looks like Github needs your help.';
                            }

                            return newState;
                        });
                    }, (error) => {
                        this.setState({ searching: false, list: [], friendlyMessage: "Whoops! Github couldn't handle that last query. Try a different search." });
                    }
                );
            });
        }

        if (!this.state.keyword) {
            this.setState({ friendlyMessage: "Whoa! We feel the excitement. Don't forget to let us know what you're searching for." });
        }

    }

    renderList() {
        let repos = [];

        if (this.state.list.length) {
            repos = this.state.list.map((repo) => {
                let rows = [];

                rows.push(
                    <div className="repo-row parent" key={ repo.url } onClick={() => this.toggleExpanded(repo.url)}>
                        <div>{ repo.name }</div>
                        <div>{ repo.owner }</div>
                    </div>
                );

                if (this.state.expanded === repo.url) {
                    rows.push(
                        <div className="repo-row child" key={ repo.url + '-child' }>
                            <div>{ repo.language }</div>
                            <div>{ repo.followers }</div>
                            <div>{ repo.url }</div>
                            <br />
                            <div>{ repo.description }</div>
                        </div>
                    );
                }

                return rows;
            });


            return (
                <div className="results-list">
                    <div>Search Results</div>
                    { repos }
                </div>
            );
        }

    }

    render () {
        return (
            <div className="page">
                <div className="title"></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="search" type="text" name="keyword" value={ this.state.keyword } placeholder="Search" onChange={ this.handleInputChange } />
                    </div>
                </form>
                <div className="friendly-message">{this.state.friendlyMessage}</div>
                {this.renderList()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



