import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import * as serviceWorker from './serviceWorker';

const productable= [
  {name:"amineeee",category: "azertuy",price:"3000"},
  {name:"amineee",category: "azertu",price:"300"},
  {name:"amine",category: "azerty",price:"400"},
  {name:"moahmed",category: "aaa",price:"800"},
  {name:"ahmed",category: "bbb",price:"200"},
  {name:"anas",category: "ccc",price:"600"},
];
const ProductTable = (props)=>{
  const table=props.objet;
  const productsMap =table.carte(produit)=>{
    return(
      <tr style={{fondstyle:"italic",fontSize:20,textAlign:"center"}}>
        <td style={{backgroundcolor:"black",width:400}}>{props.name}</td>
        <td style={{backgroundcolor:"yellow",width:300}}>{props.category}</td>
        <td style={{backgroundcolor:"red",width:300}}>{props.price}</td>
        </tr>
    );
  });
  return(
    <di>
      <h2 style ={{textAlign:"center",fontSize:50}}></h2>
      <table style ={{paddingLeft:"25%"}}>
        <tr style ={{backgroundcolor:"red"}}>
          <th>name</th>
          <th>category</th>
          <th>price</th>
        </tr>
        {productsMap}
      </table>
    </di>
  );
}
Productrow . propTypes  =  {
  products : PropTypes .array ,
  name : PropTypes .string ,
  price : PropTypes .string ,
 category : PropTypes . oneOf ( ["name" ,"homme" ] )
} ;



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
