function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.link} />

      <div className="card-body">
        <h3 className="card-body-item-h3">{props.clothe}</h3>
        <h1 className="card-body-item-h1">{props.offer}</h1>
        <h3 className="card-body-item-h3">Shop Now</h3>
        <p className="card-body-item-p">Price {props.price} </p>
      </div>
    </div>
  );
}

export default Card;
