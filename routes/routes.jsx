// Import your component pages
import Home from "../src/views/Home";
import Login from "../src/views/Login";
import Character from "../src/views/splittermond/Character.jsx";
import Characters from "../src/views/splittermond/Characters.jsx";
import EditCharacter from "../src/views/splittermond/EditCharacter.jsx";

export const publicRoutes = [
  { path: '/login', element: <Login /> }
];

export const privateRoutes = [
  { path: '/', element: <Home />, name: "Home", home: false },
  { path: '/splittermond', element: <Characters /> , name: "Splittermond", home: true},
  { path: '/splittermond/:id', element: <Character /> , name: "Splittermond", home: false},
  { path: '/splittermond/:id/edit', element: <EditCharacter /> , name: "Splittermond", home: false},
];