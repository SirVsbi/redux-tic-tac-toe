import { connect } from "react-redux";
import { setName } from "./redux-app/actions";
import AppPresenter from "./Presenter";
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    addName: name => {
      dispatch(setName(name));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresenter);
