import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Loader2 } from "lucide-react";

// Importing Pages
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useAuthStore } from './store/useAuthStore';

const App = () => {

  // States
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="flex h-screen w-full justify-center items-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin size-10 text-purple-600 drop-shadow-lg" />
        <span className="text-lg font-semibold text-gray-700 tracking-wide">Checking authentication...</span>
      </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Toaster />

      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <AuthPage />} />
        <Route path='/auth' element={!authUser ? <AuthPage /> : <HomePage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
