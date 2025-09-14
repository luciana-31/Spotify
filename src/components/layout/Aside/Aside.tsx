import LanguageIcon from "../../../assets/svg/LanguageIcon/LanguageIcon";
import PlusIcon from "../../../assets/svg/PlusIcon/PlusIcon";
import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";

export default function Aside() {
  return (
    <aside className="flex flex-col justify-around w-[25%] bg-sp-dark-gray  rounded-sm p-1.5 font-bold">
      <header className="flex items-center  justify-between text-white text-sm  mx-2.5">
        <h2>Tu Biblioteca</h2>
        <PlusIcon className="h-3" />
      </header>
      <section className="flex flex-col ">
        <Card
          title="Crea tu primera Playlist"
          description="!Es muy fácil! Te vamos a ayudar."
          button="Crear Playlist"
        />
        <Card
          title="Busquemos algunos podcasts para seguir"
          description="Te mantendremos al tanto de los nuevo espisodios"
          button="Explorar podcasts"
        />
      </section>
      <footer className="flex flex-col gap-y-5 font-light px-4">
        <div className="flex flex-col gap-y-2">
          <ul className="flex items-center gap-y-2 flex-wrap w-full  gap-x-3 text-xxs text-sp-light-gray-2 ">
            <li>Legal</li>
            <li>Seguridad y control de Privacidad</li>
            <li>Politica de Privacidad</li>
            <li>Cookies</li>
            <li>Sobre Los anuncios</li>
            <li>Accesibilidad</li>
          </ul>
          <span className="text-white text-xxs hover:underline w-fit cursor-pointer">
            Cookies
          </span>
        </div>
        <Button className="px-2.5 py-1 gap-x-2 border border-sp-light-gray-2 text-white w-fit text-xs">
          <LanguageIcon className="h-3" />
          Español de Latinoamerica
        </Button>
      </footer>
    </aside>
  );
}
