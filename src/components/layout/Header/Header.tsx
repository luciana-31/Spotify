import DownloadIcon from "../../../assets/svg/DownloadIcon/DownloadIcon";
import HomeIcon from "../../../assets/svg/HomeIcon/HomeIcon";
import SpotifyIcon from "../../../assets/svg/SpotifyIcon/SpotifyIcon";
import Button from "../../ui/Button/Button";
import Search from "../../ui/Search/Search";

export default function Header() {
  return (
    <header className="bg-black py-1">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <SpotifyIcon className="h-6 w-6 mx-5" />
          <div className="flex items-center gap-x-1.5">
            <span className="flex items-center justify-center p-2 bg-sp-gray rounded-full">
              <HomeIcon className="h-4.5 " />
            </span>
            <Search
              placeholder="¿Qué Quieres Reproducir?"
              className={{ container: "w-90" }}
            />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <ul className=" flex items-center gap-x-2 text-sp-light-gray-2 text-xs font-bold">
            <li className="hover:text-white hover:font-extrabold">Premium</li>
            <li>Ayuda</li>
            <li>Descargar</li>
          </ul>
          <span className="border-l border-white rounded-full h-4.5" />
          <ul className=" flex items-center gap-x-5 text-sp-light-gray-2 text-xxs font-bold">
            <li>
              <span className="flex items-center gap-x-1.5">
                <DownloadIcon className="h-3" />
                Instalar aplicación
              </span>
            </li>
            <li>Regístrate</li>
          </ul>
          <Button className="py-2.5 p-6">Iniciar sesión</Button>
        </div>
      </nav>
    </header>
  );
}
