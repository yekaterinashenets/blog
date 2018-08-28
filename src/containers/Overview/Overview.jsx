import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class Overview extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div className="overview" />;
  }
}

const mapStateToProps = state => ({
  state: state
});

export default connect(
  mapStateToProps,
  null
)(Overview);
