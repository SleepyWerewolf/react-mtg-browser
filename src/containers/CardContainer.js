import { connect } from 'react-redux';
import { fetchCardById } from '../actions';
import Card from '../components/Card';
import mtg from 'mtgsdk';

const mapStateToProps = (state, ownProps) => {
  const { selectedCard, isFetchingData } = state;
  const { params: { id } } = ownProps;

  const thing = mtg;
  return {
    selectedCard,
    isFetchingData,
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
