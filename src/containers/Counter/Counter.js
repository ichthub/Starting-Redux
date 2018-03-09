import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //         default:
    //         console.log('default');
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment"   clicked={this.props.onIncrCtr} />
                <CounterControl label="Decrement"   clicked={this.props.onDecrCtr}  />
                <CounterControl label="Add 10"       clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 10"  clicked={this.props.onSubs}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
      ctr: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
      onIncrCtr: () => dispatch({type: 'INCREMENT'}),
      onDecrCtr: () => dispatch({type: 'DECREMENT'}),
      onAdd: () => dispatch({type: 'ADD', val: 10}),
      onSubs: () => dispatch({type: 'SUBTRACT', val: 10})
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
