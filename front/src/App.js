import './App.css';
import Layout from './modules/Main/containers/Layout/Layout';
import MainRoutes from './main-routes';

function App() {
  return (
    <div className="App">
      <Layout>
      <MainRoutes></MainRoutes>
      </Layout>
    </div>
  );
}

export default App;
