import React from 'react';

const Step2 = ({ data, setData, errors }) => {
  return (
    <div className="form-step">
      <h4 className="mb-4 text-secondary">Step 2: Account Security</h4>

      {/* Password */}
      <div className="mb-3">
        <label htmlFor="password" className="form-label fw-bold">Password *</label>
        <input
          id="password"
          type="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder="Enter password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {errors.password ? <div className="invalid-feedback">{errors.password}</div> : null}
      </div>

      {/* Confirm Password */}
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password *</label>
        <input
          id="confirmPassword"
          type="password"
          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          placeholder="Re-enter password"
          value={data.confirmPassword}
          onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
        />
        {errors.confirmPassword ? (
          <div className="invalid-feedback">{errors.confirmPassword}</div>
        ) : null}
      </div>
    </div>
  );
};


export default Step2;