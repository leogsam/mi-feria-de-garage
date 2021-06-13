import React from 'react'
import { Card, Image } from 'semantic-ui-react';
import './ItemCount.css';

const ArticleCard
 = ( {img, name, price, description, amount, boton} ) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{price}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <h2>Cantidad: {amount}</h2>
    </Card.Content>
    {boton}
  </Card>
)

export default ArticleCard
