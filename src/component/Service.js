import React, { useState } from 'react';

function Service({ service, updateService, deleteService }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleUpdate = () => {
    updateService({ id: service.id, name, description, price });
    setIsEditing(false);
  };

  return (
    <div className="service">
      {isEditing ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>${service.price}</p>
        </div>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={() => deleteService(service.id)}>Delete</button>
    </div>
  );
}

export default Service;
