// import AppLayout from "./components/layout/AppLayout/AppLayout";
import Aside from "./components/layout/Aside/Aside";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Register from "./components/ui/Register/Register";

function App() {
  return (
    <div className="h-screen w-fit md:w-full  bg-black px-1.5 flex flex-col  2xl:flex 2xl:items-center ">
      <Header />
      <div className="flex flex-1 gap-x-1.5 w-full overflow-hidden 2xl:max-w-[1920px]">
        <Aside />
        <Main />
      </div>
      <Register />
    </div>
  );
}

export default App;
