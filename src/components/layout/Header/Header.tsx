import DownloadIcon from "../../../assets/svg/DownloadIcon/DownloadIcon";
import HomeIcon from "../../../assets/svg/HomeIcon/HomeIcon";
import SpotifyIcon from "../../../assets/svg/SpotifyIcon/SpotifyIcon";
import Button from "../../ui/Button/Button";
import IconWrapper from "../../ui/IconWrapper/IconWrapper";
import Menu from "../../ui/Menu/Menu";
import Search from "../../ui/Search/Search";

export default function Header() {
  return (
    <header className="bg-black py-1.5 2xl:max-w-[1920px] ">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center">
          <SpotifyIcon className="h-6  mx-5" />
          <span className="flex items-center  md:gap-x-1.5 justify-center">
            <IconWrapper icon={<HomeIcon className="h-4.5 " />} />
            <Search
              placeholder="¿Qué Quieres Reproducir?"
              className={{ container: "w-[350px] 2xl:w-[250px] 2xl:mx-3" }}
            />
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-x-4">
          <Menu data={["Premium", "Ayuda", "Descargar"]} />
          <span className="border-l border-white rounded-full h-4.5" />
          <ul className=" flex items-center gap-x-5 text-sp-light-gray-2 text-xxs font-bold">
            <li>
              <span className="flex items-center gap-x-1.5 hover:text-white text-nowrap  cursor-pointer">
                <DownloadIcon className="h-3 " />
                Instalar aplicación
              </span>
            </li>
            <li className="hover:text-white  cursor-pointer ">Regístrate</li>
          </ul>
          <Button className="py-2.5 px-6 bg-white hover:bg-sp-white">
            Iniciar sesión
          </Button>
        </div>
      </nav>
    </header>
  );
}
