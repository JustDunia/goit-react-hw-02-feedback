import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positive } = this.props;
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positive}%</p>
      </div>
    );
  }
}
