import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Main extends Component {
    handleSetCount = () => {
      const { itemCount } = this.props;
      this.props.setCount(itemCount + 1);
    }

    render() {
      const { itemCount } = this.props;
      return (
        <div>
                Главная
                <Link to='/exchangecurrency'>temp</Link>
          <br />
          <div>счетчик: {itemCount}</div>
          <button
            onClick={this.handleSetCount}
          >
              Увеличить счетчик
          </button>
        </div>
      );
    }
}


Main.propTypes = {
  itemCount: PropTypes.number,
  setCount: PropTypes.func,
};


export default Main;
