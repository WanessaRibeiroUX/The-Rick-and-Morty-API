import { useState } from "react";
import { Button } from "./button";
import { Modal } from "./modal";
export default function VerMaisModal({ id }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        title="Ver mais"
        isActive
        onClick={() => {
          setOpenModal(true);
        }}
      />
      {openModal && <Modal id={id} setOpen={setOpenModal} />}
    </>
  );
}
