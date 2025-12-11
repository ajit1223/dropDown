import { useState } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const items = [
    "option1",
    "option2",
    "option3",
    "option4",
    "option5",
    "option6",
  ];
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div
          className="relative inline-block"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="p-4 bg-amber-500 hover:shadow-2xl cursor-pointer flex flex-row text-4xl rounded-lg">
            hover on me
            <img
              className="hover:rotate-180 transition duration-300 ease-in-out"
              src="\public\dropdown-arrow.svg"
              height={45}
              width={45}
            ></img>
          </button>
          {isOpen && (
            <ul className="absolute w-full mt-0 bg-white shadow-md rounded-md gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-4 hover:bg-gray-500 hover:scale-110 hover:rounded-2xl cursor-pointer text-black border-b-blue-700 border-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
