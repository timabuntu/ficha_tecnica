import { House, Storefront } from "phosphor-react";
export const Menu = () => {
  return (
    <div className="flex flex-col items-center w-full p-2">
      <button className="p-4 transition-colors rounded hover:bg-zinc-800 text-zinc-300 hover:text-violet-400">
        <Storefront className="w-7 h-7" />
      </button>
      <button className="p-4 mt-2 transition-colors rounded hover:bg-zinc-800 text-zinc-300 hover:text-violet-400">
        <House className="w-7 h-7" />
      </button>
    </div>
  );
};
