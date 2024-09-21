import React, { useState } from 'react';
import './ServiceForm.css'
function ServiceForm({ addService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const newService = {
        id: Date.now(),
        name,
        description,
        price,
      };
      addService(newService);
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Service Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Service</button>
    </form>
  );
}

export default ServiceForm;
