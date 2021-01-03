import React from 'react';
import ReactDOM from 'react-dom';
import Direction from './Direction';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Direction dir={270} wind={9} gust={12} />, div);
    //<Direction dir={this.props.dir} wind={this.props.wind} gust={this.props.gust} />
});
