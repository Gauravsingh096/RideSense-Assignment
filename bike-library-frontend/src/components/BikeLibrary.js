import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/bikes';

const BikeLibrary = () => {
  const [bikes, setBikes] = useState([]);
  const [newBike, setNewBike] = useState({ make: '', model: '', year: '', type: '' });

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setBikes(response.data))
      .catch((error) => console.error('Error fetching bikes:', error));
  }, []);

  const addBike = (e) => {
    e.preventDefault();
    axios.post(API_URL, newBike)
      .then((response) => setBikes([...bikes, response.data]))
      .catch((error) => console.error('Error adding bike:', error));
  };

  const deleteBike = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setBikes(bikes.filter(bike => bike._id !== id)))
      .catch((error) => console.error('Error deleting bike:', error));
  };

  return (
    <div>
      <h1>Bike Library</h1>
      <form onSubmit={addBike}>
        <input type="text" placeholder="Make" value={newBike.make} onChange={(e) => setNewBike({ ...newBike, make: e.target.value })} />
        <input type="text" placeholder="Model" value={newBike.model} onChange={(e) => setNewBike({ ...newBike, model: e.target.value })} />
        <input type="number" placeholder="Year" value={newBike.year} onChange={(e) => setNewBike({ ...newBike, year: e.target.value })} />
        <input type="text" placeholder="Type" value={newBike.type} onChange={(e) => setNewBike({ ...newBike, type: e.target.value })} />
        <button type="submit">Add Bike</button>
      </form>

      <h2>Available Bikes</h2>
      <ul>
        {bikes.map(bike => (
          <li key={bike._id}>
            {bike.make} {bike.model} ({bike.year}) - {bike.type}
            <button onClick={() => deleteBike(bike._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BikeLibrary;
