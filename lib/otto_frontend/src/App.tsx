import { UserProvider } from './context/User/UserProvider';
import Layout from './layouts/Layout';
import { Router } from './router';

import '@/styles/main.scss';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Router />
      </Layout>
    </UserProvider>
  );
}

export default App;
