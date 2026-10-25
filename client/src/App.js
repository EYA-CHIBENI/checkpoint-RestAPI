import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavContacts from './Components/NavContacts';
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import Contacts from './Components/Contacts';
import EditContact from './Components/EditContact';
function App() {
  return (
    <div>
      <NavContacts></NavContacts>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AddContact' element={<AddContact/>}></Route>
        <Route path='/Contacts' element={<Contacts/>}></Route>
        <Route path='/EditContact/:id' element={<EditContact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
