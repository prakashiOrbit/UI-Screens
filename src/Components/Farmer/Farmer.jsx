import React from "react";

import FormView from "../CreateForm";
import { getApi, postMethod } from "../../webservice";
import SmartConnect from "../Url/SmartConnect";

class Farmer extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.state = {
      functions: this.child,
      handleClick: null,
    };
    console.log(this.child, "child propss");
  }
  componentDidMount() {
    this.setState({
      handleClick: this.state.functions.current
        ? this.state.functions.current.handleClick
        : {},
    });
  }

  render() {
    return (
      <div>
        {this.state.handleClick ? (
          <>
            <FormView
              aev="add"
              fields={"/Service/farmer.json"}
              search={"/Service/farmersearch.json"}
              getApi={getApi}
              postApi={
                this.state.functions.current
                  ? this.state.functions.current.handleClick
                  : null
              }
            />
          </>
        ) : null}
        <SmartConnect ref={this.child} />
      </div>
    );
  }
}

export default Farmer;
