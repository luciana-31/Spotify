import Button from "../../ui/Button/Button";

export default function Register() {
  return (
    <div className="h-[10%] flex items-center justify-between p-2 bg-gradient-to-r from-sp-pink via-sp-purple to-sp-blue my-1.5 ">
      <span className="text-white text-xs">
        Muestra de Spotify
        <p>
          Registrate para acceder a canciones y podcasts ilimitados con algunos
          anuncios. No necesitaras tarjeta de credito.
        </p>
      </span>
      <Button className="bg-white px-6 py-2.5">Registrate Gratis</Button>
    </div>
  );
}
