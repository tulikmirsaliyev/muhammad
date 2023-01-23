import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';

const YanGi=()=> {
  const proid = useParams();
  const proDetail = DATA.filter(x=>x.id==proid.id)
  const product = proDetail[0];
  console.log(product);

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <hr/>
          <h2>
            {product.price}
          </h2>
          <p>{product.description}</p>
          <button className="btn btn-outline-primary">Add to Card</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default YanGi;