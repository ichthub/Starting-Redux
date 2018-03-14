import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../Store/actions';
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
      onIncrCtr: () => dispatch({type: actionTypes.INCREMENT}),
      onDecrCtr: () => dispatch({type: actionTypes.DECREMENT}),
      onAdd: () => dispatch({type: actionTypes.ADD, val: 10}),
      onSubs: () => dispatch({type: actionTypes.SUBTRACT, val: 10}),
      onStoreRes: (res) => dispatch({type: actionTypes.STORE_RESULT, result: res}),
      onDeleteRes: (id) => dispatch({type: actionTypes.DELETE_RESULT, id}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
