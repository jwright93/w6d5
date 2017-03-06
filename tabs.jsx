import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.click = this.click.bind(this);
  }

  click(event) {
    this.setState( {index: parseInt(event.target.id)} );
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.panes.map( (item, i) => {
              let tabTitle = item.title;
              return (<li key={i} id={i} onClick={this.click}>{tabTitle}</li>);
            })
          }
        </ul>
        <article>
          <p>{this.props.panes[this.state.index].content}</p>
        </article>
      </div>
    );
  }
}
