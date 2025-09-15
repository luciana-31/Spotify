import Button from "../../ui/Button/Button";

export default function Register() {
  return (
    <div className="h-[8%] flex items-center justify-between cursor-pointer p-2 bg-gradient-to-r from-sp-pink via-sp-purple to-sp-blue my-1.5 px-3 w-full ">
      <span className="text-white text-xs ">
        <h4 className="font-bold">Muestra de Spotify</h4>
        <p>
          Registrate para acceder a canciones y podcasts ilimitados con algunos
          anuncios. No necesitaras tarjeta de credito.
        </p>
      </span>
      <Button className="bg-white px-6 py-2.5 hover:bg-sp-white">
        Registrate Gratis
      </Button>
    </div>
  );
}
