export const bookingLoader = async () => {
  // get products data
  const bookingData = await fetch("categories.json");
  const bookings = await bookingData.json();

  return { bookings };
};
// const [categories, setCategories] = useState([]);
// useEffect(() => {
//   fetch("http://localhost:5000/rooms-categories")
//     .then((res) => res.json())
//     .then((data) => setCategories(data));
// }, []);
