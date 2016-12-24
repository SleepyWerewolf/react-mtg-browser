import { connect } from 'react-redux';
import { fetchCardById } from '../actions';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
  const { selectedCard, isFetchingData, errors } = state;
  const { params: { id } } = ownProps;

  return {
    selectedCard,
    isFetchingData,
    errors,
    cardId: id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount(cardId) {
      dispatch(fetchCardById(cardId));
    }
  };
};

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
