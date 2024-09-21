import React, { useState } from 'react';
import './App.css';
import ServiceList from './component/ServiceList';
import ServiceForm from './component/ServiceForm';

function App() {
  const [services, setServices] = useState([]);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const updateService = (updatedService) => {
    setServices(services.map(service => 
      service.id === updatedService.id ? updatedService : service
    ));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <ServiceForm addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;
