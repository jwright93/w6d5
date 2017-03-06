import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});

const panes  = [
  {title: 'first', content: 'first description'},
  {title: 'second', content: 'second description'},
  {title: 'third', content: 'third description'},
  {title: 'fourth', content: 'fourth description'},
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Tabs panes={panes}/>
      </div>
    );
  }
}
