import { connect } from 'react-redux';
import { fetchCardSetTitles } from '../actions';
import CardCatalog from '../components/CardCatalog';

const mapStateToProps = state => {
  const { cardSetTitles, isFetchingData } = state;
  return {
    cardSetTitles,
    isFetchingData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount() {
      dispatch(fetchCardSetTitles());
    }
  };
};

const CardCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CardCatalog);

export default CardCatalogContainer;
