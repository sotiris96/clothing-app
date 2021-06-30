import ShopActionTypes from './shop-types';

import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import CollectionsPage from '../../pages/collection/collection';

export const fetchCollectionsStart = () => ({

  type: ShopActionTypes.FETCH_COLLECTIONS_START,
 
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})


export const fetchCollectionsStartAsynch = () => {

  return dispatch => {

    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

 /* ksekina to asixrono aitima */ 

    collectionRef.get().then((snapshot) => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
       //updateCollections(collectionsMap); kanei to idio pragma 
    dispatch(fetchCollectionsSuccess(collectionsMap));
    this.setState({ loading: false});
    }).catch( error => dispatch(fetchCollectionsFailure(error.message)) );
  };

}


