import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { CafeTable } from "./CafeTable";
import Pagination from "@/components/Pagination";

export const ProjectAccordion = ({ userParam }) => {
  const [activeTab, setActiveTab] = useState("Products");
  const tabs = ["Products", "Ketersediaan meja"];
  const [products, setProducts] = useState([]);
  const [productPage, setProductPage] = useState(1);
  const [totalProductPages, setTotalProductPages] = useState(1);

  const [listMeja, setListMeja] = useState([]);
  const [listMejaPage, setListMejaPage] = useState(1);
  const [totalListMejaPages, setTotalListMejaPages] = useState(1);

  const fetchProducts = async (page = 1) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${userParam}?page=${page}&limit=10`
      );
      const data = await response.json();

      setTotalProductPages(data.totalPages);

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchlistMeja = async (page = 1) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/list-meja/${userParam}?page=${page}&limit=5`
      );
      const data = await response.json();

      setTotalListMejaPages(data.totalPages);

      setListMeja(data.listMeja);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(productPage);
  }, [productPage]);

  useEffect(() => {
    fetchlistMeja(listMejaPage);
  }, [listMejaPage]);

  return (
    <>
      <div className="mb-8">
        {/* Tabs */}
        <div className="flex space-x-0 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? "bg-gray-600 text-white border-gray-600"
                  : "bg-white text-gray-700 border-transparent hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      {activeTab === "Products" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  name={product.productName}
                  price={product.productPrice}
                  stock={product.productQuantity}
                  status={product.productStatus}
                  image={product.productImage}
                />
              ))
            ) : (
              <p className="text-gray-500">No data available.</p>
            )}
          </div>

          {products.length > 0 && (
            <Pagination
              currentPage={productPage}
              totalPages={totalProductPages}
              onPageChange={(page) => setProductPage(page)}
            />
          )}
        </>
      )}

      {/* Ketersediaan Meja */}
      {activeTab === "Ketersediaan meja" &&
        (listMeja.length > 0 ? (
          <>
            <CafeTable dataListMeja={listMeja} />
            <Pagination
              currentPage={listMejaPage}
              totalPages={totalListMejaPages}
              onPageChange={(page) => setListMejaPage(page)}
            />
          </>
        ) : (
          <p className="text-gray-500">No data available.</p>
        ))}
    </>
  );
};
