import MusicDisplay from "../../ui/MusicDisplay/MusicDisplay";

import { Songs } from "../../../const/Songs";
import { Singers } from "../../../const/Singers";
import LinkList from "../../ui/LinkList/LinkList";
import InstagramIcon from "../../../assets/svg/InstagramIcon/InstagramIcon";
import TwitterIcon from "../../../assets/svg/TwitterIcon/TwitterIcon";
import FacebookIcon from "../../../assets/svg/FacebookIcon/FacebookIcon";

export default function Main() {
  return (
    <main className="bg-gradient-to-b from-sp-gray-2 to-sp-dark-gray to-30% h-[490px] w-[75%] rounded-sm overflow-hidden overflow-y-auto md:w-3/4">
      <MusicDisplay data={Songs} />
      <MusicDisplay data={Singers} type="artist" />
      <MusicDisplay data={Songs} />
      <MusicDisplay data={Songs} />

      <span className="block  border-t border-sp-gray-2 my-12 mx-5" />

      <footer className="flex flex-col px-6">
        <div className="flex items-start justify-between">
          <LinkList
            title="Compañia "
            links={["Acerca De", "Empleo", "For The Record"]}
          />
          <LinkList
            title="Comunidades"
            links={[
              "Para Artistas",
              "Desarrolladores",
              "Publicidad",
              "Inversionistas",
              "Proveedores",
            ]}
          />
          <LinkList
            title="Enlaces Utiles"
            links={[
              "Ayuda",
              "App oviles gratis",
              "Contenido popular por país",
              "Import your music ",
            ]}
          />
          <LinkList
            title="Planes Spotify"
            links={[
              "Premium individual",
              "Premiiun duo",
              "Premium familiar",
              "premium para estudiantes",
              "Version gratuita",
            ]}
          />
          <div className="flex items-center gap-x-3">
            <span className="flex items-center bg-sp-gray p-2 rounded-full">
              <InstagramIcon className="h-3" />
            </span>
            <span className="flex items-center bg-sp-gray p-2 rounded-full">
              <TwitterIcon className="h-3" />
            </span>
            <span className="flex items-center bg-sp-gray p-2 rounded-full">
              <FacebookIcon className="h-3" />
            </span>
          </div>
        </div>
        <span className="block  border-t border-sp-gray-2 mt-9 " />
        <span className="text-xs text-sp-light-gray my-5 ">
          © 20025 Spotify AB
        </span>
      </footer>
    </main>
  );
}
