import "./index.css";

import { ArrowCircleRight, ArrowCircleLeft } from "@phosphor-icons/react";

import { Card } from "./components/card";
import { useEffect, useState } from "react";
import { cn } from "./utils/utils";

function App() {
  const [page, setPage] = useState(1);

  const [persons, setPersons] = useState(null);

  const getPersons = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" + page,
      {
        method: "GET",
      }
    ).then((res) => res.json());
    setPersons(response.results);
  };

  useEffect(() => {
    getPersons();
  }, [page]);

  /* Paginação */

  const previousPage = () => {
    if (page <= 1) {
      return setPage(page);
    }
    setPage(page - 1);
  };

  const nextPage = () => {
    if (page >= 42) {
      return setPage(page);
    }
    setPage(page + 1);
  };

  return (
    <main className="bg-zinc-900 w-full min-h-screen  passion-regular">
      <div className="p-10">
        <div className="flex gap-16">
          <h1 className="text-5xl text-primary">The Rick and Morty API</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={previousPage}
              disabled={page <= 1}
              className={cn(page <= 1 ? "opacity-50" : "")}
            >
              <ArrowCircleLeft size={40} color="#269acd" />
            </button>

            <p className="text-3xl text-primary">{page} / 42 </p>

            <button
              onClick={nextPage}
              disabled={page >= 42}
              className={cn(page >= 42 ? "opacity-50" : "")}
            >
              <ArrowCircleRight size={40} color="#269acd" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 sm:grid-cols-3 gap-6">
          {persons?.map((person) => {
            return <Card key={person.id} person={person} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
