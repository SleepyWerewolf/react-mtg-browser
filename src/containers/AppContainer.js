import { connect } from 'react-redux';
import { fetchCardSetNames } from '../actions';
import App from '../components/App';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount() {
      dispatch(fetchCardSetNames());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
