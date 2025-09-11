import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CafeCard from "@/components/CafeCard";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { Coffee, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FindCafePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cafe, setCafe] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchInput = (e) => {
    e.preventDefault();
    searchParams.set("search", e.target.search.value);
    setSearchParams(searchParams);
    setPage(1);
    getDataCafeByQueryParam();
  };

  async function getDataCafeByQueryParam() {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/users?page=${page}&limit=5&search=${searchParams.get("search")}`
      );

      if (!response.ok) throw new Error("Gagal fetch data");

      const data = await response.json();

      // load more: tambahkan data baru
      if (page === 1) {
        setCafe(data.users);
      } else {
        setCafe((prev) => [...prev, ...data.users]);
      }

      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // handle load more
  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getDataCafeByQueryParam();
  }, [page, searchParams]);

  return (
    <Layout>
      <section className="relative min-h-screen py-36 lg:py-40">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge
              text="Discover Amazing Cafes"
              color="primary"
              className="mb-6"
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-textColor-1 bg-clip-text text-transparent">
              Cari Cafe
              <br />
              <span className="bg-gradient-to-r from-textColor-1 to-bgColor-2 bg-clip-text text-transparent">
                Sesukamu!
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Temukan cafe favorit di sekitar Anda dengan mudah dan cepat
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 p-2">
                  <form onSubmit={searchInput}>
                    <input
                      type="text"
                      className="w-full px-6 py-4 text-lg rounded-xl focus:outline-none"
                      placeholder="Cari berdasarkan nama cafe atau lokasi..."
                      id="search"
                      autoComplete="off"
                      autoFocus
                    />
                    <Button className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-xl ">
                      <SearchIcon />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {cafe.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-700">
                Found {cafe.length} cafes
              </h2>
            </div>
          )}

          {/* Cafe Grid */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] justify-center">
            {cafe.length > 0
              ? cafe.map((cafeItem) => (
                  <CafeCard
                    key={cafeItem._id}
                    id={cafeItem._id}
                    namaCafe={cafeItem.namaCafe}
                    lokasiCafe={cafeItem.lokasiCafe}
                    noTelp={cafeItem.noTelp}
                    // rating={cafeItem.rating}
                    // isOpen={cafeItem.isOpen}
                    // distance={cafeItem.distance}
                    // image={cafeItem.image}
                  />
                ))
              : searchParams.get("search") && (
                  <div className="col-span-full text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Coffee className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                      Cafe Tidak Ditemukan
                    </h3>
                    <p className="text-gray-500">
                      Coba ubah kata kunci pencarian atau filter yang Anda
                      gunakan
                    </p>
                  </div>
                )}
          </div>

          {/* Pagination */}
          {page < totalPages && (
            <div className="text-center">
              <Button
                onClick={handleLoadMore}
                disabled={loading}
                className="mx-auto"
              >
                {loading ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FindCafePage;
