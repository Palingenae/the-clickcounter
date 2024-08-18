// This can surely be improved

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector, createSelector } from 'reselect';

import Clicker from '../components/Clicker/Clicker';

import reducer, { initialState } from '../reducers/clickCounter';

import { incrementAction, decrementAction } from '../actions/incrementDecrement';
import { useInjectReducer } from '../utils/injectReducer';

const key = 'clickCounter';

const selectClickCounterDomain = state => state.clickCounter || initialState;
const makeSelectClickCounter = () => createSelector(
  selectClickCounterDomain, substate => substate.counter
);

function injectClickerProps(props) {
  useInjectReducer({ key, reducer });

  return (<Clicker {...props} />);
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectClickCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(injectClickerProps);

