import React from 'react';
import ItemCard from './ItemCard'
import orange from '../../Assets/orange.png'

const ItemListContainer = () => {
    const products = [
        {id:1, 
        name:'PanDulce Chocolate', 
        img:{orange}, 
        description: 'Pan dulce de chocolate. Ingredientes incluye, azucar, canela y pasta sabor chocolate.', 
        price: 2.25, 
        stock: 20
        }, 
        {id:2, 
            name:'PanDulce blanco', 
            img:{orange}, 
            description: 'Pan dulce blanco. Ingredientes incluye, azucar, canela y pasta blanca.', 
            price: 2.25, 
            stock: 20
        }, 
        {id:3, 
            name:'PanDulce de canela', 
            img:{orange}, 
            description: 'Pan dulce de canela. Ingredientes incluye, canela y sin pasta/azucar de decoracion', 
            price: 2.25, 
            stock: 20
        }
    ]; 

    const array = [
      <ItemCard/>, 
      <ItemCard/>, 
      <ItemCard/>
    ]



    return(
        <div>
           {array}
        </div>
    )
}