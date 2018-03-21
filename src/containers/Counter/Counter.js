import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsCreators from '../../Store/actions/exportsGrouping';//increament fun
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment"   clicked={this.props.onIncrCtr} />
                <CounterControl label="Decrement"   clicked={this.props.onDecrCtr}  />
                <CounterControl label="Add 10"       clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 10"  clicked={this.props.onSubs}  />
                <hr/>
                <button onClick={() => this.props.onStoreRes(this.props.ctr)}>Result</button>
                <ul>
                  {this.props.storedResults.map(val => (
                    <li key= {val.id} onClick={() => this.props.onDeleteRes(val.id)}>{val.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {//state
  return{
      ctr: state.ctr.counter,
      storedResults : state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {//actions
  return{
      onIncrCtr: () => dispatch(actionsCreators.increament()), //pass increament and excute it
      onDecrCtr: () => dispatch(actionsCreators.decreament()),
      onAdd: () => dispatch(actionsCreators.add(10)),//payload given as arg
      onSubs: () => dispatch(actionsCreators.subtract(10)),
      onStoreRes: (res) => dispatch(actionsCreators.storedResults(res)),
      onDeleteRes: (id) => dispatch(actionsCreators.deleteResult(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
