import { connect } from 'react-redux';
import { fetchCardSetTypes } from '../actions';
import App from '../components/App';

const mapStateToProps = state => {
  const { setTypes } = state;
  return {
    setTypes
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
