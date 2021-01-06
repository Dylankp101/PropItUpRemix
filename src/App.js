
import './App.css';

import MyComponent from './components/MyComponent';

function App() {
  return (
    <div>
        <MyComponent firstName={"Jon"} lastName={"Jacobs"} age={44} hairColor={"Black"}/>
        <MyComponent firstName={"Sam"} lastName={"Darnold"} age={24} hairColor={"Blonde"}/>
        <MyComponent firstName={"Louie"} lastName={"Chales"} age={14} hairColor={"Brown"}/>
        <MyComponent firstName={"David"} lastName={"Lang"} age={78} hairColor={"White"}/>
    </div>
  );
}



export default App;
