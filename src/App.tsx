import { Menu } from "./components/Menu";

export const App = () => {
  return (
    <div className="flex min-h-screen bg-zinc-800">
      <div className="bg-zinc-900 w-[100px]">
        <Menu />
      </div>
    </div>
  );
};
