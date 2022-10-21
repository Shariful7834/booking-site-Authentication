import backhome from "../../assets/backhome.jpg";

import BookingCard from "../BookingCard/BookingCard";
import { useLoaderData } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const { bookings } = useLoaderData();

  // console.log(bookings);
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/rooms-categories")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);

  return (
    <div className="container ">
      <div className="container">
        <img className="img-fluid" src={backhome} alt="" />
      </div>
      <h2>Booking page</h2>
      <div className="card-container">
        {bookings.map((category) => (
          <BookingCard key={category.id} category={category}></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default Booking;
