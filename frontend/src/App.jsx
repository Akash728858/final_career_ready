import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';
import DashboardLayout from './pages/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ResumeBuilderApp from './integration/ResumeBuilderApp';
import JobTrackerApp from './integration/JobTrackerApp';
import PlacementPrepApp from './integration/PlacementPrepApp';

export default function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            {/* Redirect root directly to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="resume/*" element={<ResumeBuilderApp />} />
              <Route path="job-tracker/*" element={<JobTrackerApp />} />
              <Route path="jobs/*" element={<Navigate to="/dashboard/job-tracker" replace />} />
              <Route path="placement/*" element={<PlacementPrepApp />} />
              <Route path="prep/*" element={<Navigate to="/dashboard/placement" replace />} />
            </Route>
            
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </AuthProvider>
  );
}
