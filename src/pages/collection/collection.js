import React , {useEffect} from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../compononets/collection-item/CollectionItem';

import { selectCollection } from '../../redux/shop/shop-selectors';

import { firestore } from '../../firebase/firebase.utils';

import {CollectionPageContainer,CollectionTitle, CollectionItemsContainer} from './collection-style';


const CollectionsPage = ({ collection }) => {


  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionsPage)