import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { createSelector } from 'reselect';

import { initialState } from '../reducers/clickCounter';
import Clicker from '../components/Clicker/Clicker';
import { incrementAction, decrementAction } from '../actions/incrementDecrement';
import { useInjectReducer } from '../utils/injectReducer';

import reducer from '../reducers/clickCounter';

const key = 'clickCounter';

const selectClickCounterDomain = state => state.clickCounter || initialState;

const makeSelectClickCounter = () => createSelector(
  selectClickCounterDomain, substate => substate.counter);

function ClickCounter(props) {
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
)(ClickCounter);

