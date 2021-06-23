import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../compononets/collections-overview/collections-overview';
import collectionPages from '../collection/collection';

 const  ShopPage = ({ match })=>{
    return (

      <div className='shop-page'>
      
      <Route  exact path={`${match.path}`} component= {CollectionsOverview} /> 
      <Route  path={`${match.path}/:collectionId`} component={collectionPages} /> 
        
      </div>
  ); 
};

 export default ShopPage;
