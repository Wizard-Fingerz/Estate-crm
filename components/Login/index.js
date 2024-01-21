import { useState, useEffect } from 'react';
import styles from './Login.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [changePasswordRequired, setChangePasswordRequired] = useState(false);

    useEffect(() => {
        // Check if the user needs to change their password
        async function checkPasswordChange() {
            // Retrieve the token from local storage
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }

            // Send a request to your API endpoint to determine if password change is required
            try {
                const response = await fetch('http://127.0.0.1:8000/check-password-change/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`, // Include the token for authorization
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setChangePasswordRequired(data.change_password_required);
                } else {
                    // Handle error when checking password change requirement
                    console.error('Error checking password change requirement');
                }
            } catch (error) {
                // Handle network or request error
                console.error('Network error:', error);
            }
        }

        checkPasswordChange();
    }, []);

    const handleLogin = async () => {
        // Prepare the login data
        const loginData = {
            username: username,
            password: password,
        };

        // Send a POST request to your Django API endpoint
        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();

                // Display the token in the console
                console.log('Token:', data.token);

                // Save the token to the local storage
                localStorage.setItem('token', data.token);
                // Data should include user_type and user_id
                if (changePasswordRequired) {
                    window.location.href = '/change-password'; // Redirect to the password change page
                } else if (data.user_type === 'marketer') {
                    window.location.href = '/marketer-dashboard'; // Redirect to the marketer dashboard
                } else if (data.user_type === 'accountant') {
                    window.location.href = '/accountant-dashboard'; // Redirect to the accountant dashboard
                } else if (data.user_type === 'admin') {
                    window.location.href = '/admin'; // Redirect to the accountant dashboard
                }
            } else {
                // Handle login failure
                console.error('Login failed');
            }
        } catch (error) {
            // Handle network or request error
            console.error('Network error:', error);
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.brand}>
                        <img src='assets/logo.png' />
                        <h1>Estate Name</h1>
                    </div>
                    <h1 className={styles.wlc}>Welcome <br />to <br />Your Estate <br />CRM System</h1>
                </div>
                <div className={styles.form}>
                    <h1 className={styles.title} style={{}}>Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    /><br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <button className={styles.button} onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
