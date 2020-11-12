import './App.css';
import Layout from './components/Layout/Layout';
import { Route } from "react-router-dom";
import ContactsApp from './containers/ContactsApp/ContactsApp';
import ContactDetails from './components/ContactDetails/ContactDetails';
import ContactEdit from './containers/EditContact/EditContact';

function App() {
  return (
    <div className="App">
      <Layout>
      <Route exact path="/" component={ContactsApp}></Route>
      <Route path="/contact/:id" component={ContactDetails} ></Route>
      <Route path="/contact/edit/:id" component={ContactEdit} ></Route>
      </Layout>
    </div>
  );
}

export default App;
