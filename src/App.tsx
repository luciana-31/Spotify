// import AppLayout from "./components/layout/AppLayout/AppLayout";
import Aside from "./components/layout/Aside/Aside";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Register from "./components/ui/Register/Register";

function App() {
  return (
    <div className="h-screen bg-black px-1.5 flex flex-col box-border">
      <Header />

      <div className="flex flex-1 gap-x-1.5 overflow-hidden">
        <Aside />
        <Main />
      </div>
      <Register />
    </div>
  );
}

export default App;
