import React from 'react';
import Service from './Service';
import './ServiceList.css'
function ServiceList({ services, updateService, deleteService }) {
  return (
    <div>
      {services.length > 0 ? (
        services.map(service => (
          <Service
            key={service.id}
            service={service}
            updateService={updateService}
            deleteService={deleteService}
          />
        ))
      ) : (
        <p>No services available. Add a service!</p>
      )}
    </div>
  );
}

export default ServiceList;
