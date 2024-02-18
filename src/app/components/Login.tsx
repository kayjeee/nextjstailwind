import React, { useState } from 'react';
import { useRealm } from './useRealm';
import { Credentials, App as RealmApp } from 'realm-web';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const app: RealmApp = useRealm(); // Assuming useRealm returns RealmApp

  const handleLogin = async () => {
    try {
      const credentials: Credentials = Credentials.emailPassword(email, password);
      await app.logIn(credentials);
      // Redirect or handle successful login
    } catch (error: any) {
      // Explicitly define the type of the caught error as 'Error'
      console.error('Login failed:', (error as Error).message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
