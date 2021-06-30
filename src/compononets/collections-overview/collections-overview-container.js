import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {compose} from 'redux';
import { selectCollectionFetching } from '../../redux/shop/shop-selectors';
import  WithSpinner from '../with-spiner/with-spinner';
import collectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
  isLoading:selectCollectionFetching
});

const CollectionsOverviewContainer=compose (
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;

