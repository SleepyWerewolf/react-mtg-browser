import { connect } from 'react-redux';
import { acknowledgeError } from '../actions';
import ErrorPopUps from '../components/ErrorPopUps';

const mapStateToProps = state => {
  const { errors } = state;
  //const filteredErrors = errors.filter(error => !error.isAcknowledged);
  return {
    errors: errors.filter(error => !error.isAcknowledged)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onErrorClick(errorId) {
      dispatch(acknowledgeError(errorId));
    }
  };
};

const ErrorPopUpsContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorPopUps);

export default ErrorPopUpsContainer;
