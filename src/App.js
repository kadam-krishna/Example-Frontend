import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import CreateStudent from './Components/CreateStudent';
import StudentList from './Components/StudentList';
import Nav from './Components/Nav';
import EditStudent from './Components/EditStudent';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateStudent />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
