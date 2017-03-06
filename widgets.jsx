import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
import Autocomplete from './autocomplete';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});

const panes  = [
  {title: 'first', content: 'first description'},
  {title: 'second', content: 'second description'},
  {title: 'third', content: 'third description'},
  {title: 'fourth', content: 'fourth description'},
];

const Names = [
  'Jon',
  'Jenn',
  'Judy',
  'Jessica',
  'Bart',
  'Remy',
  'Sally',
  'Xavier'
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Tabs panes={panes}/>
        <Autocomplete names={Names}/>
        <Clock/>
      </div>
    );
  }
}
