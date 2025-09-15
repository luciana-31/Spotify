import LanguageIcon from "../../../assets/svg/LanguageIcon/LanguageIcon";
import PlusIcon from "../../../assets/svg/PlusIcon/PlusIcon";
import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";
import LinkList from "../../ui/LinkList/LinkList";

export default function Aside() {
  return (
    <aside className="flex flex-col justify-between w-[22%] bg-sp-dark-gray rounded-sm p-1.5 font-bold border-box">
      <section className="flex flex-col gap-y-5">
        <header className="flex items-center  justify-between text-white text-sm mx-3 my-2">
          <h2>Tu Biblioteca</h2>
          <span className="flex items-center p-1.5 text-sp-light-gray-2   hover:bg-sp-light-gray-3 rounded-full cursor-pointer transition-all ease-in">
            <PlusIcon className="h-3" />
          </span>
        </header>
        <div className="flex flex-col ">
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
        </div>
      </section>
      <footer className="flex flex-col gap-y-5 font-light px-4 mb-4">
        <div className="flex flex-col gap-y-2">
          <LinkList
            links={[
              "Legal",
              "Seguridad y control de Privacidad",
              "Politica de Privacidad",
              "Cookies",
              "Sobre Los anuncios",
              "Accesibilidad",
            ]}
            type="aside"
          />

          <span className="text-white text-xxs hover:underline w-fit cursor-pointer">
            Cookies
          </span>
        </div>
        <Button className=" border-box px-2.5 py-1 gap-x-2 border border-sp-light-gray-2 text-white w-fit text-xs">
          <LanguageIcon className="h-3" />
          Español de Latinoamerica
        </Button>
      </footer>
    </aside>
  );
}
