import React from "react"
import { connect } from "react-redux"
import { setName } from "../actions/fieldAction"

class Feild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.props.dispatch(setName(e.target.value))
  };

  render(props) {
    let str = this.props.datas;
    let soni = str.split("").reverse().join("")

    return (
      <div>
        <h1>Component</h1>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
        <h1>Result:- {soni}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datas: state.datas,
  };
};

export default connect(mapStateToProps)(Feild);
