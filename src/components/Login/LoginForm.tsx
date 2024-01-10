// LoginForm.tsx

import React, { useState } from 'react';
import "./Login.css"

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin = () => {} }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    onLogin(email, password);
  };

  return (
    <div>
      <form>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="input-container">
        
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
