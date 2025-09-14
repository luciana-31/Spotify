import HomeIcon from "../../../assets/svg/HomeIcon/HomeIcon";
import SpotifyIcon from "../../../assets/svg/SpotifyIcon/SpotifyIcon";
import Search from "../../ui/Search/Search";

export default function Header() {
  return (
    <header className="bg-black py-1.5">
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
        <ul></ul>
      </nav>
    </header>
  );
}
