import { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <button
            className={styles.btn}
            onClick={onLeaveFeedback}
            id={option}
            key={nanoid()}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
