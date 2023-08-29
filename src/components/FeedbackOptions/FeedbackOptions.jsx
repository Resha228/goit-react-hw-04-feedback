// FeedbackOptions.js
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonFeedBack } from './FeedbackOptions.styled';

function FeedbackOptions({ odderForGood, odderForNeutral, odderForBad }) {
  return (
    <ButtonContainer>
     <ButtonFeedBack key="Good" name="Good" onClick={odderForGood}>
  Good
</ButtonFeedBack>
<ButtonFeedBack key="Neutral" name="Neutral"  onClick={odderForNeutral}>
  Neutral
</ButtonFeedBack>
<ButtonFeedBack key="Bad" name="Bad"  onClick={odderForBad}>
  Bad
</ButtonFeedBack>
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  odderForGood: PropTypes.func.isRequired,
  odderForNeutral: PropTypes.func.isRequired,
  odderForBad: PropTypes.func.isRequired,
};

export { FeedbackOptions };