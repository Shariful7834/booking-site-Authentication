import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BookingCard = (props) => {
  const { name, description, price, ratings, available, img, id } =
    props.category;

  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <h3>{name}</h3>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h5>Rooms: {available}</h5>
          <h5 className="d-flex justify-content-between align-items-center">
            {ratings}
          </h5>
          <h5>${price}</h5>
          <Link to={`/bookinginfo/${id}`} className="text-white">
            <Button className=" fs-4" variant="primary">
              Book
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
// {`/bookingInfo/${id}`}

export default BookingCard;
