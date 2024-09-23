import React from "react";

function Image({ loc, name }) {
  return (
    <div className="flex flex-col justify-center">
      <img
        src={loc}
        className="justify-self-center cursor-pointer rounded-lg h-full object-contain"
        onClick={() => document.getElementById(name).showModal()}
      />
      <h2 className="font-bold text-center">{name}</h2>
      <dialog id={name} className="modal">
        <div className="modal-box flex-col gap-4 max-w-screen-2xl bg-slate-200 dark:bg-slate-800">
          <h3 className="font-bold text-lg mb-4">{name}</h3>
          <div className="container">
            <img
              src={loc}
              className="object-contain rounded-lg border-4 border-black"
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
