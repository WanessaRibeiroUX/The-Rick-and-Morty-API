import { Status } from "./status";

import VerMaisModal from "./verMaisModal";

export function Card({ person }) {
  return (
    <section key={person.id}>
      <div className="h-auto bg-zinc-800 text-white rounded-md shadow-lg mt-8">
        <div className="w-full">
          <img className="rounded-t-md w-full" src={person?.image} alt="" />
        </div>
        <div className="p-4">
          <h2 className="text-3xl text-primary">{person?.name}</h2>
          <div className="flex items-center gap-2 lato-regular">
            <Status status={person?.status} />
            <p>
              {person?.status} - {person?.species}
            </p>
          </div>
        </div>
        <div className="p-4 flex justify-end">
          <VerMaisModal id={person.id} />
        </div>
      </div>
    </section>
  );
}
