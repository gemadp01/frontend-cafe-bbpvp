import { SearchIcon } from "lucide-react";
import CardCafe from "../components/CardCafe";
import Pagination from "../components/Pagination";

function FindCafePage() {
  return (
    <section
      id="find-cafe"
      className="min-h-screen w-7xl flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-4 justify-center items-center p-4 my-6 mt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Cari Cafe Sesukamu!
        </h1>
        <div className="relative p-3 border border-bgColor-2 rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-md p-3 w-full"
            placeholder="Cari berdasarkan nama cafe atau lokasi!"
          />
          <button type="submit" className="absolute right-6 top-6">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center mt-10">
        <CardCafe />
      </div>
      <div>
        <Pagination />
      </div>
    </section>
  );
}

export default FindCafePage;
