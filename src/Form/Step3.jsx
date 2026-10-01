import React from 'react';

const Step3 = ({ data }) => {
  return (
    <div className="form-step">
      <h4 className="mb-3 text-secondary">Step 3: Review Your Details</h4>
      <p className="text-muted small mb-4">
        Please verify all your information before submitting the form.
      </p>

      {/* Personal Details Card */}
      <div className="card bg-light border-0 p-3 mb-3 rounded-3">
        <h6 className="fw-bold text-primary mb-3">Personal Information</h6>
        <div className="row g-2">
          <div className="col-5 text-muted">Full Name:</div>
          <div className="col-7 fw-semibold">
            {data.name ? data.name : 'Not provided'}
          </div>

          <div className="col-5 text-muted">Email Address:</div>
          <div className="col-7 fw-semibold">
            {data.email ? data.email : 'Not provided'}
          </div>

          <div className="col-5 text-muted">Phone Number:</div>
          <div className="col-7 fw-semibold">
            {data.contact ? data.contact : 'Not provided'}
          </div>

          <div className="col-5 text-muted">City:</div>
          <div className="col-7 fw-semibold">
            {data.city ? data.city : 'Not selected'}
          </div>
        </div>
      </div>

      {/* Security Details Card */}
      <div className="card bg-light border-0 p-3 rounded-3">
        <h6 className="fw-bold text-primary mb-3">Account Security</h6>
        <div className="row g-2">
          <div className="col-5 text-muted">Password:</div>
          <div className="col-7 fw-semibold">
            {data.password ? '•'.repeat(data.password.length) : 'Not set'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;