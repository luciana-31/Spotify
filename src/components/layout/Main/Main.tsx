import MusicDisplay from "../../ui/MusicDisplay/MusicDisplay";

import { Songs } from "../../../const/Songs";
import { Singers } from "../../../const/Singers";
import LinkList from "../../ui/LinkList/LinkList";
import InstagramIcon from "../../../assets/svg/InstagramIcon/InstagramIcon";
import TwitterIcon from "../../../assets/svg/TwitterIcon/TwitterIcon";
import FacebookIcon from "../../../assets/svg/FacebookIcon/FacebookIcon";
import IconWrapper from "../../ui/IconWrapper/IconWrapper";

export default function Main() {
  return (
    <main className="flex-1 bg-gradient-to-b from-sp-gray-2 to-sp-dark-gray to-30%  rounded-sm overflow-y-auto ">
      <MusicDisplay data={Songs} />
      <MusicDisplay data={Singers} type="artist" />
      {/* <MusicDisplay data={Songs} /> */}
      {/* <MusicDisplay data={Songs} /> */}

      <span className="block  border-t border-sp-gray-2 my-12 mx-5" />

      <footer className="flex flex-col px-6">
        <div className="flex items-start justify-between">
          <LinkList
            title="Compañia "
            links={["Acerca De", "Empleo", "For The Record"]}
            type="footer"
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
            type="footer"
          />
          <LinkList
            title="Enlaces Utiles"
            links={[
              "Ayuda",
              "App moviles gratis",
              "Contenido popular por país",
              "Import your music ",
            ]}
            type="footer"
          />
          <LinkList
            title="Planes Spotify"
            links={[
              "Premium individual",
              "Premium duo",
              "Premium familiar",
              "premium para estudiantes",
              "Version gratuita",
            ]}
            type="footer"
          />
          <div className="flex items-center gap-x-3">
            <IconWrapper icon={<InstagramIcon className="h-3 " />} />
            <IconWrapper icon={<TwitterIcon className="h-3 " />} />
            <IconWrapper icon={<FacebookIcon className="h-3 " />} />
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
