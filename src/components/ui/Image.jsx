import React from "react";

function Image({ loc, name }) {
  return (
    <div
      className="flex flex-col justify-center max-h-[70vh]"
      style={{ width: "fit-content" }}
    >
      <img
        src={loc}
        className="justify-self-center cursor-pointer rounded-lg object-contain max-h-[60vh]"
        onClick={() => document.getElementById(name).showModal()}
      />
      <h2 className="font-bold text-center">{name}</h2>
      <dialog id={name} className="modal">
        <div className="modal-box flex-col gap-4 max-w-screen-2xl bg-slate-200 dark:bg-slate-800 max-h-screen">
          <h3 className="font-bold text-lg mb-4">{name}</h3>
          <div className="container flex items-center">
            <img
              src={loc}
              className="object-contain justify-center rounded-lg border-4 border-black max-h-[50vh]"
            />
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Image;
