import React from 'react';
import ReactDOM from 'react-dom';
import propstypes from 
import './index.css';
import * as serviceWorker from './serviceWorker';

const productable= [
  {nom:"aminee",cartégorie: "azerti",prix:"200"};
  {nom:"amineee",cartégorie: "azertu",prix:"300"};
  {nom:"amine",cartégorie: "azerty",prix:"400"};
  {nom:"moahmed",cartégorie: "aaa",prix:"800"};
  {nom:"ahmed",cartégorie: "bbb",prix:"200"};
  {nom:"anas",cartégorie: "ccc",prix:"600"};
];
const productable= (props)=>{
  const table=props.objet;
  const productsMap =table.carte(produit)=>{
    return(
      <tr style={{fondstyle:"italic",fontSize:20,textAlign:"center"}}>
        <td style={{backgroundcolor:"black",width:400}}>{props.nom}</td>
        <td style={{backgroundcolor:"yellow",width:300}}>{props.cartégorie}</td>
        <td style={{backgroundcolor:"red",width:300}}>{props.produit}</td>
        </tr>
    );
  });
  return(
    <di>
      <h2 style ={{textAlign:"center",fontSize:50}}></h2>
      <table style ={{paddingLeft:"25%"}}>
        <tr style ={{backgroundcolor:"red"}}>
          <th>name</th>
          <th>cartégorie</th>
          <th>prix</th>
        </tr>
        {productsMap}
      </table>
    </di>
  );
}
Productrow . propTypes  =  {
  produits : PropTypes . tableau ,
  nom : PropTypes . chaîne ,
  prix : PropTypes . chaîne ,
  catégorie : PropTypes . oneOf ( [ "name" ,  "homme" ] )
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
