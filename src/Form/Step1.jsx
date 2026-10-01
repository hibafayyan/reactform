import React from 'react';

const Step1 = ({ data, setData, errors }) => {
  return (
    <div className="form-step">
      <h4 className="mb-4 text-secondary">Step 1: Personal Information</h4>
      
      {/* Full Name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bold">Full Name *</label>
        <input 
          id="name"
          type="text" 
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          placeholder="e.g. Ali Malik"
          value={data.name} 
          onChange={(e) => setData({ ...data, name: e.target.value })} 
        />
        {/* Ternary Operator for Error Display */}
        {errors.name ? <div className="invalid-feedback">{errors.name}</div> : null}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">Email Address *</label>
        <input 
          id="email"
          type="email" 
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="e.g. name@example.com"
          value={data.email} 
          onChange={(e) => setData({ ...data, email: e.target.value })} 
        />
        {errors.email ? <div className="invalid-feedback">{errors.email}</div> : null}
      </div>

      {/* Phone Number */}
      <div className="mb-3">
        <label htmlFor="contact" className="form-label fw-bold">Phone Number *</label>
        <input 
          id="contact"
          type="tel" 
          className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
          placeholder="e.g. 0300-1234567"
          value={data.contact} 
          onChange={(e) => setData({ ...data, contact: e.target.value })} 
        />
        {errors.contact ? <div className="invalid-feedback">{errors.contact}</div> : null}
      </div>

      {/* City Dropdown */}
      <div className="mb-3">
        <label htmlFor="city" className="form-label fw-bold">City *</label>
        <select 
          id="city"
          className={`form-select ${errors.city ? 'is-invalid' : ''}`}
          value={data.city} 
          onChange={(e) => setData({ ...data, city: e.target.value })}
        >
          <option value="">Select your city</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Peshawar">Peshawar</option>
          <option value="Quetta">Quetta</option>
        </select>
        {errors.city ? <div className="invalid-feedback">{errors.city}</div> : null}
      </div>
    </div>
  );
};

export default Step1;