// FeedbackOptions.js
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonFeedBack } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {options.map((option) => (
        <ButtonFeedBack key={option} name={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonFeedBack>
      ))}
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Проп "options" - массив строк
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
