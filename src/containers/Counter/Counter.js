import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.props.onStoreRes}>Result</button>
                <ul>
                  {this.props.storedResults.map(val => (
                    <li key= {val.id} onClick={this.props.onDeleteRes}>{val.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {//state
  return{
      ctr: state.counter,
      storedResults : state.results,
  };
};

const mapDispatchToProps = (dispatch) => {//actions
  return{
      onIncrCtr: () => dispatch({type: 'INCREMENT'}),
      onDecrCtr: () => dispatch({type: 'DECREMENT'}),
      onAdd: () => dispatch({type: 'ADD', val: 10}),
      onSubs: () => dispatch({type: 'SUBTRACT', val: 10}),
      onStoreRes: () => dispatch({type: 'STORE_RESULT'}),
      onDeleteRes: () => dispatch({type: 'DELETE_RESULT'}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
