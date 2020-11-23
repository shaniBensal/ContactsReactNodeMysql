import './App.scss';
import Layout from './modules/Main/containers/Layout/Layout';
import MainRoutes from './main-routes';

function App() {
  return (
    <div className="App app-bg">
      <Layout>
      <MainRoutes></MainRoutes>
      </Layout>
    </div>
  );
}

export default App;
