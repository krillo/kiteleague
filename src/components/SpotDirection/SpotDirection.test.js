import React from 'react';
import ReactDOM from 'react-dom';
import SpotDirection from './SpotDirection';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpotDirection dir={270} wind={9} gust={12} />, div);
    //<Direction dir={this.props.dir} wind={this.props.wind} gust={this.props.gust} />
});
