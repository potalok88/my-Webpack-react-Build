import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from '../../utils/injectSaga';
import ExchangeCurrency from '../../components/ExchangeCurrency/ExchangeCurrency';
import { setCount } from '../../redux/modules/app';
import saga from '../../redux/modules/exchangeCurrency/saga';
import { fetch as loadRateCurrency } from '../../redux/modules/exchangeCurrency';


export const mapDispatchToProps = {
  setCount,
  loadRateCurrency,
};

const mapStateToProps = state => ({
  itemCount: state.get('app').get('itemsCount'),
});


export default compose(
  injectSaga({ key: 'exchangeCurrency', saga }),
  connect(mapStateToProps, mapDispatchToProps),
)(ExchangeCurrency);
