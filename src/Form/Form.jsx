import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Form = () => {
 
  const [step, setStep] = useState(1);

  // Form Data State
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    password: '',
    confirmPassword: '',
  });

  
  const [errors, setErrors] = useState({});


  const handleNext = () => {
    let newErrors = {};

   
    if (step === 1) {
      if (!data.name.trim()) newErrors.name = 'Full Name is required!';
      if (!data.email.trim()) newErrors.email = 'Email Address is required!';
      if (!data.contact.trim()) newErrors.contact = 'Phone Number is required!';
      if (!data.city.trim()) newErrors.city = 'Please select a city!';
    }

    if (step === 2) {
      if (!data.password) {
        newErrors.password = 'Password is required!';
      } else if (data.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters!';
      }

      if (!data.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password!';
      } else if (data.password !== data.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match!';
      }
    }

   
    Object.keys(newErrors).length > 0
      ? setErrors(newErrors)
      : (setErrors({}), setStep((prev) => prev + 1));
  };

  // Back Button Function
  const handleBack = () => {
    setErrors({});
    setStep((prev) => prev - 1);
  };

  // Final Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Data:', data);
    alert('Form submitted successfully!');

    // Reset Form
    setStep(1);
    setData({
      name: '',
      email: '',
      contact: '',
      city: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
    
            <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
              <h3 className="mb-0 fs-4 fw-bold">Registration Form</h3>
              <p className="mb-0 text-white-50 small">Step {step} of 3</p>
            </div>

            <div className="card-body p-4">
              {step === 1 ? (
                <Step1 data={data} setData={setData} errors={errors} />
              ) : step === 2 ? (
                <Step2 data={data} setData={setData} errors={errors} />
              ) : (
                <Step3 data={data} />
              )}

         
              <div className="d-flex justify-content-between mt-4 pt-3 border-top">
                {step > 1 ? (
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary px-4 fw-semibold"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                ) : null}

                {step < 3 ? (
                  <button 
                    type="button" 
                    className="btn btn-primary px-4 fw-semibold ms-auto"
                    onClick={handleNext}
                  >
                    Next Step
                  </button>
                ) : (
                  <button 
                    type="button" 
                    className="btn btn-success px-4 fw-semibold ms-auto"
                    onClick={handleSubmit}
                  >
                    Submit Form
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;