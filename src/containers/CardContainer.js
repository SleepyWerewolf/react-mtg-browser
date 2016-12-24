import { connect } from 'react-redux';
import { fetchCardById } from '../actions';
import CardCatalog from '../components/CardCatalog';

const mapStateToProps = (state, props) => {
  const { selectedCard, isFetchingData } = state;

  return {
    selectedCard,
    isFetchingData,
    cardId: props.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount(cardId) {
      dispatch(fetchCardById(cardId));
    }
  };
};

const CardCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

export default CardCatalogContainer;
