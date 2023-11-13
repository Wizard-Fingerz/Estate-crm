// pages/change-password.js

import { useState } from 'react';

function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Inside your React component

  const handlePasswordChange = async () => {
    const data = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    try {
      const response = await axios.post('/api/change-password/', data);

      if (response.status === 200) {
        // Password changed successfully
        // Redirect the user to their dashboard or another page
        window.location.href = '/dashboard';
      } else {
        // Handle password change failure
        console.error('Password change failed');
      }
    } catch (error) {
      // Handle network or request error
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handlePasswordChange}>Change Password</button>
    </div>
  );
}

export default ChangePassword;
