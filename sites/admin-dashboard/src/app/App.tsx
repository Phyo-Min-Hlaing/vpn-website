import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { Keys } from './pages/Keys';
import { CreateKey } from './pages/CreateKey';
import { Plans } from './pages/Plans';
import { AddPlan } from './pages/AddPlan';
import { EditPlan } from './pages/EditPlan';
import { Customers } from './pages/Customers';
import { AddCustomer } from './pages/AddCustomer';
import { ViewCustomer } from './pages/ViewCustomer';
import { EditCustomer } from './pages/EditCustomer';
import { Payments } from './pages/Payments';
import { Downloads } from './pages/Downloads';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { Resellers } from './pages/Resellers';
import { AddReseller } from './pages/AddReseller';
import { EditReseller } from './pages/EditReseller';
import { ViewReseller } from './pages/ViewReseller';
import { Roles } from './pages/Roles';
import { APIManagement } from './pages/APIManagement';
import { AuditLogs } from './pages/AuditLogs';
import { Notifications } from './pages/Notifications';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/keys" element={<Keys />} />
          <Route path="/keys/create" element={<CreateKey />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/add" element={<AddPlan />} />
          <Route path="/plans/edit/:planId" element={<EditPlan />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/customers/view/:customerId" element={<ViewCustomer />} />
          <Route path="/customers/edit/:customerId" element={<EditCustomer />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/resellers" element={<Resellers />} />
          <Route path="/resellers/add" element={<AddReseller />} />
          <Route path="/resellers/edit/:resellerId" element={<EditReseller />} />
          <Route path="/resellers/view/:resellerId" element={<ViewReseller />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/api" element={<APIManagement />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}