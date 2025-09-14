// import AppLayout from "./components/layout/AppLayout/AppLayout";
import Aside from "./components/layout/Aside/Aside";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Register from "./components/ui/Register/Register";

function App() {
  return (
    <div className="h-screen bg-black px-1.5 flex flex-col">
      <Header />

      <div className="flex h-[95%]">
        <Aside />
        <Main />
      </div>
      <Register />
    </div>
  );
}

export default App;
