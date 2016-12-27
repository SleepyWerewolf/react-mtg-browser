import { connect } from 'react-redux';
import { fetchCardById } from '../actions';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
  const { cards, isFetchingData } = state;
  const { params: { id } } = ownProps;

  const card = cards[id];

  return {
    card,
    isFetchingData,
    id
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
