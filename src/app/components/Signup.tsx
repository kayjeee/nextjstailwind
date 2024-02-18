import React, { useState } from 'react';
import { useApp } from './useApp';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const app = useApp();

  const handleSignup = async () => {
    try {
      if (app) {
        await app.emailPasswordAuth.registerUser({
          email,
          password,
        });
        // Redirect or handle successful signup
      }
    } catch (error: any) {
      console.error('Signup failed:', (error as Error).message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup} disabled={!app}>Signup</button>
    </div>
  );
}
