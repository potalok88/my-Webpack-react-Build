import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExchangeCurrency extends Component {
    static propTypes = {
      loadRateCurrency: PropTypes.func,
    };
    static defaultProps = {
      loadRateCurrency: () => {},
    };

    componentDidMount() {
      this.props.loadRateCurrency();
    }


    render() {
      return (
        <div>
            Будут выводится данные о валюте
        </div>
      );
    }
}


export default ExchangeCurrency;
