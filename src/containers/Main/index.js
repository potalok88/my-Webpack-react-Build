import { compose } from 'redux';
import { connect } from 'react-redux';
import Main from '../../components/Main/Main';
import { setCount } from '../../redux/modules/app';


export const mapDispatchToProps = {
  setCount,
};

const mapStateToProps = state => ({
  itemCount: state.get('app').get('itemsCount'),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Main);
