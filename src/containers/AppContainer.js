import { connect } from 'react-redux';
import { fetchCardSetTypes } from '../actions';
import App from '../components/App';

const mapStateToProps = state => {
  const { cardSetTypes } = state;
  return {
    cardSetTypes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount() {
      dispatch(fetchCardSetTypes());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
