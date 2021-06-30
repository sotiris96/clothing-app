import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';
import WithSpinner  from '../../compononets/with-spiner/with-spinner';
import CollectionsPage from './collection';

const mapStateToProps=createStructuredSelector({

  isLoading: (state) => 
  !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose (

  connect(mapStateToProps),WithSpinner)(CollectionsPage);

export default CollectionPageContainer;
