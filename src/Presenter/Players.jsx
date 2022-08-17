import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ names, wins }) => ({ names, wins });

function Player({ name, wins = 0 }) {
  return (
    <div
      style={{
        padding: ".5em",
        background: "blue",
        color: "white",
        borderRadius: ".5em"
      }}
    >
      {name}: {wins}
    </div>
  );
}

function Players({ names, wins }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1em"
  };
  switch (names.length) {
    case 0:
      return <div />;
    case 1:
      return (
        <div style={gridStyle}>
          <Player name={names[0]} />
        </div>
      );
    default:
      return (
        <div style={gridStyle}>
          <Player name={names[0]} wins={wins[0]} />
          <Player name={names[1]} wins={wins[1]} />
        </div>
      );
  }
}
export default connect(mapStateToProps)(Players);
