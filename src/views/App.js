import logo from './logo.svg';
import './App.scss';

// Components
import MyComponent from './MyComponents';
import ListTodo from './Todos/Listodo';
import Nav from './nav/Nav';
import Home from './example/Home';
import ListUsers from './Users/ListUsers';

// Toast
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userdetail from './Users/Userdetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" element={<ListUsers />} />
            <Route path="/users/:id" element={<Userdetail />} />
          </Routes>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}


export default App;
