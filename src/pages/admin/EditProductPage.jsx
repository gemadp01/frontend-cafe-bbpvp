import { AdminLayout } from "@/components/AdminLayout/AdminLayout";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditProductPage = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const [product, setProduct] = useState({
    productName: "",
    productCategory: "makanan",
    productQuantity: 0,
    productPrice: 0,
    productImage: null,
    productStatus: "available",
  });
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const fetchingProduct = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/update/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Product tidak ditemukan");
        }
        if (response.status === 403) {
          throw new Error(
            "Anda tidak memiliki akses untuk mengedit product ini"
          );
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Gagal memuat data product");

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: err.message || "Gagal memuat data product",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("productName", product.productName.trim());
      formData.append("productCategory", product.productCategory);
      formData.append("productQuantity", product.productQuantity.toString());
      formData.append("productPrice", product.productPrice.toString());
      formData.append("productStatus", product.productStatus);

      if (product.productImage instanceof File) {
        formData.append("productImage", product.productImage);
      } else if (typeof product.productImage === "string") {
        formData.append("productImage", product.productImage);
      }

      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const updatedProduct = await response.json();
      console.log("Product updated successfully:", updatedProduct);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: "success",
        title: "Product berhasil diupdate!",
      }).then(() => {
        navigate("/admin/products/user/loggedin");
      });
    } catch (err) {
      console.error("Error updating product:", err);
      setError(err.message || "Gagal mengupdate product");

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: err.message || "Gagal mengupdate product",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, type, files, value } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!allowedTypes.includes(file.type)) {
          setError("Format file tidak didukung. Gunakan JPEG, PNG, atau GIF");
          return;
        }

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
          setError("Ukuran file terlalu besar. Maksimal 5MB");
          return;
        }

        setProduct((prev) => ({
          ...prev,
          [name]: file,
        }));
        setPreview(URL.createObjectURL(file));
        setError("");
      }
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  useEffect(() => {
    if (id) {
      fetchingProduct();
    }
  }, [id]);

  return (
    <AdminLayout title="Edit Product" description="Edit Product">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Edit Product
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <form
            method="PUT"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label
                htmlFor="productName"
                className="block text-gray-700 font-medium mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan nama produk"
                value={product.productName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="productCategory"
                className="block text-gray-700 font-medium mb-2"
              >
                Product Category
              </label>
              <select
                name="productCategory"
                id="productCategory"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={product.productCategory}
                onChange={handleInputChange}
                required
              >
                <option value="">Pilih kategori</option>
                <option value="makanan">Makanan</option>
                <option value="minuman">Minuman</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="productQuantity"
                className="block text-gray-700 font-medium mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={product.productQuantity}
                onChange={handleInputChange}
                min="0"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="productPrice"
                className="block text-gray-700 font-medium mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan harga produk"
                value={product.productPrice}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="productImage"
                className="block text-gray-700 font-medium mb-2"
              >
                Product Image
              </label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleInputChange}
                accept="image/jpeg,image/jpg,image/png,image/gif"
              />
              <p className="text-sm text-gray-500 mt-1">
                Format yang didukung: JPEG, PNG. Maksimal 5MB
              </p>

              {preview && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">
                    Preview gambar baru:
                  </p>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                </div>
              )}

              {/* Show existing image if no preview */}
              {!preview &&
                product.productImage &&
                typeof product.productImage === "string" && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">
                      Gambar saat ini:
                    </p>
                    <img
                      src={`http://localhost:3000/${product.productImage}`}
                      alt="Current product"
                      className="w-32 h-32 object-cover rounded-md border"
                    />
                  </div>
                )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="productStatus"
                className="block text-gray-700 font-medium mb-2"
              >
                Product Status
              </label>
              <select
                name="productStatus"
                id="productStatus"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={product.productStatus}
                onChange={handleInputChange}
                required
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                color="secondary"
                width="auto"
                onClick={() => navigate("/admin/products/user/loggedin")}
                disabled={loading}
              >
                Batal
              </Button>
              <Button
                type="submit"
                color="primary"
                width="full"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Product"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default EditProductPage;
