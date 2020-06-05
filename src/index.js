import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import * as serviceWorker from './serviceWorker';



const ProductTable =props => {
  const productsArray = props.products;
  const productsItems = productsArray.map((item) =>
   
    <ProductRow {...item} />
    
  );

  return (
  <table style={{margin:"50px auto", width: "80%",border:"1px solid #ccc" }}>
    <thead style={{ backgroundColor: "#f1f1f1", textTransform:"uppercase"}}>
      <th style={{padding:10}}>Product</th>
      <th>Price</th>
      <th>Category</th>
    </thead>
    <tbody style={{ textAlign: "center"}}>
    {productsItems}
    </tbody>
  </table>
  );
}



const ProductRow = props => {
  return (
    <tr>
    <td style={{padding:10}}>{props.name}</td>
    <td>{props.price}</td>
    <td>{props.category}</td>
    </tr>

  );
};

ProductRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  category : PropTypes.string,
};


const products = [
  {
      name: 'tlf',
      price: '30$',
      category : 'Electronics'
  },

  {
    name: 'maryole',
    price: '15$',
    category : 'Electronics'
  },

  {
      name: 'Tshirt',
      price: '35$',
      category : 'Clothes'
  },

  {
    name: 'sbedri',
    price: '450$',
    category : 'Clothes'
},

];



ReactDOM.render(
  <React.StrictMode>
    <ProductTable products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
