import MusicDisplay from "../../ui/MusicDisplay/MusicDisplay";

import { Songs } from "../../../const/Songs";
import LinkList from "../../ui/LinkList/LinkList";
import InstagramIcon from "../../../assets/svg/InstagramIcon/InstagramIcon";
import TwitterIcon from "../../../assets/svg/TwitterIcon/TwitterIcon";
import FacebookIcon from "../../../assets/svg/FacebookIcon/FacebookIcon";
import IconWrapper from "../../ui/IconWrapper/IconWrapper";
import { Singers } from "../../../const/Singers";
import { Listas } from "../../../const/Listas";
import { Estaciones } from "../../../const/Estaciones";

export default function Main() {
  return (
    <main className="flex-1 w-full bg-gradient-to-b from-sp-gray-2 to-sp-dark-gray to-30%  rounded-sm overflow-y-auto overflow-x-hidden pt-6 ">
      <section className="flex flex-col gap-y-10">
        <MusicDisplay data={Songs} title="Canciones del Momento" />
        <MusicDisplay data={Singers} type="artist" title="Artistas Populares" />
        <MusicDisplay data={Songs} title="Canciones del Momento" />

        <MusicDisplay data={Estaciones} title="Albumes y Sencillos populares" />
        <MusicDisplay data={Listas} title="Listas Destacadas" />
      </section>

      <span className="block  border-t border-sp-gray-2 my-12 mx-5" />

      <footer className="flex flex-col px-6">
        <div className="flex flex-col gap-y-8 items-start justify-between sm:flex-row">
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
