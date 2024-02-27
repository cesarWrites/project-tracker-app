import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpIsValid(otp)) {
      history.push('/dashboard');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h2>Confirm Your Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <button type="submit">Confirm Account</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
