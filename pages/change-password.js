// pages/change-password.js

import { useState } from 'react';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = async () => {
    const data = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('${API_BASE_URL}/change-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`, // Include the token for authorization
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
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
    <div className='changePassword'>
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      /><br /><input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      /><br />
      <button onClick={handlePasswordChange}>Change Password</button>
    </div>
  );
}

export default ChangePassword;
