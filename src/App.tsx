import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { NotFoundPage } from './components/NotFoundPage';
import { HomeDescription } from './components/HomeDescription';
import { Users } from './components/Users';

export const App: React.FC = () => {
  return (
    <div>
      <NavBar />

      <main className="section">
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomeDescription />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
