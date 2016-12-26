import { connect } from 'react-redux';
import { fetchCardSetTitles } from '../actions';
import App from '../components/App';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount() {
      dispatch(fetchCardSetTitles());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
