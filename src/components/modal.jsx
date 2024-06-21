import { useState, useEffect } from "react";
import { Button } from "./button";
import { Status } from "./status";
export function Modal({ id, setOpen }) {
  const [person, setPerson] = useState(null);

  /* Para trazer o episodio, que vem de person por um objeto 
  "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // 
        como quero trazer apenas o primeiro episodio que foi visto, faça um fetch(response.episode[0]) apenas na posição 0
        ...*/

  const [episode, setEpisode] = useState(null);

  const [location, setLocation] = useState(null);

  const [residents, setResidents] = useState(null);

  const getPerson = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/" + id,
      {
        method: "GET",
      }
    ).then((res) => res.json());
    setPerson(response);

    const episode = await fetch(response.episode[0]).then((res) => res.json());
    setEpisode(episode);

    const location = await fetch(response.location.url).then((res) =>
      res.json()
    );
    setLocation(location);

    const residents = await fetch(location.residents[0]).then((res) =>
      res.json()
    );
    setResidents(residents.name);
  };

  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div
      onClick={() => setOpen(false)}
      className="w-full h-full flex items-center justify-center inset-0 min-h-screen bg-black/25 rounded-md shadow-lg fixed"
    >
      <div className="flex flex-col p-8 h-auto md:w-1/4 sm:w-2/4 bg-dark02 rounded-md relative gap-4">
        <h3 className="text-4xl">{person?.name}</h3>
        <div className="flex items-center gap-2 lato-regular">
          <Status status={person?.status} /> {person?.status}{" "}
        </div>
        <div className="text-xl">
          Espécie:
          <p className="lato-bold">{person?.species}</p>
        </div>
        <div className="text-xl">
          Tipo:
          <p className="lato-bold">
            {person?.type === "" ? "Não há um tipo" : person?.type}
          </p>
        </div>
        <div className="text-xl">
          Genero:
          <p className="lato-bold">{person?.gender}</p>
        </div>

        <div className="text-xl">
          Origem:
          <p className="lato-bold">{person?.origin.name}</p>
        </div>
        <div className="text-xl">
          Visto pela primeira vez em:
          <p className="lato-bold">{episode?.name}</p>
          <p className="lato-bold">{episode?.air_date}</p>
          <p className="lato-bold">{episode?.episode}</p>
        </div>
        <div className="text-xl">
          Localização:
          <p className="lato-bold">{location?.name}</p>
          <p className="lato-bold">{location?.type}</p>
          <p className="lato-bold">
            {location?.dimension === "unknown"
              ? "Não há dimensão"
              : location?.dimension}
          </p>
          <p className="lato-bold">{location?.created}</p>
        </div>
        <div className="text-xl">
          Residentes:
          <p className="lato-bold">{residents}</p>
        </div>
        <Button
          className="absolute top-4 right-4"
          title="X"
          isActive
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
}
