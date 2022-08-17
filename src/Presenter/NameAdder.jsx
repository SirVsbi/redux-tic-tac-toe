import React from "react";
import { connect } from "react-redux";
import { setName } from "../redux-app/actions";

const mapStateToProps = ({ names }) => ({ names });
const mapDispatchToProps = dispatch => ({
  addName: name => dispatch(setName(name))
});
function NameAdder({ names, addName }) {
  function onKeyPress(e) {
    if (e.key === "Enter" && e.target.value) {
      addName(e.target.value);
      e.target.value = "";
    }
  }
  return (
    <div>
      <div>
        <p>
          <strong>Enter Player {names.length + 1} Name</strong>
        </p>
        <p>
          <input type="text" onKeyPress={onKeyPress} />
        </p>
      </div>
    </div>
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameAdder);
