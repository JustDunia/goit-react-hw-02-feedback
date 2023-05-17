import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <button onClick={onLeaveFeedback} id={options[0]}>
          Good
        </button>
        <button onClick={onLeaveFeedback} id={options[1]}>
          Neutral
        </button>
        <button onClick={onLeaveFeedback} id={options[2]}>
          Bad
        </button>
      </div>
    );
  }
}
