import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin();
      navigate('/client');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-bg">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-secondary/10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-primary mb-2">Client Portal</h1>
          <p className="text-text-muted">Sign in to manage your orders and events.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <Input label="Email Address" type="email" placeholder="client@company.com" required />
          <Input label="Password" type="password" placeholder="••••••••" required />
          
          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Authenticating...' : 'Secure Login'}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
            <a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;