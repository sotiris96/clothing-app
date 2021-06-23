import React  from 'react';

import '../../compononets/collection-item/CollectionItem';

import './category.scss';

const CategoryPage = ({ match }) => {
  
  console.log(match.params.caregoryId);
  return(

<div className='category'> 
  <h2>CategoryPage </h2>
</div>

) };
export default CategoryPage; 

