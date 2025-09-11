import { AdminLayout } from "@/components/AdminLayout/AdminLayout";
import { Breadcrumb } from "@/components/Breadcrumb";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditListMejaPage = () => {
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { mejaId } = useParams();
  const navigate = useNavigate();
  const [listMeja, setListMeja] = useState({
    noMeja: "",
    status: "available",
    waktuPemesanan: "",
    note: "",
  });
  // const [listMeja, setListMeja] = useState(null);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const fetchingListMeja = async () => {
    setLoading(true);
    setError("");
    try {
      // Changed endpoint to GET method for fetching data
      const response = await fetch(
        `http://localhost:3000/api/list-meja/update/${mejaId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // const formattedData = {
      //   ...data,
      //   waktuPemesanan: data.waktuPemesanan
      //     ? new Date(data.waktuPemesanan).toISOString().slice(0, 16)
      //     : "",
      // };

      setListMeja(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Gagal memuat data meja");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setListMeja((prev) => {
      // copy array lama
      const newList = [...prev];

      // copy object yang mau diubah
      newList[index] = {
        ...newList[index],
        [name]: value, // update field yang sesuai name
      };

      return newList;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:3000/api/list-meja/${mejaId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(listMeja[0]),
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Data meja berhasil diperbarui!",
      }).then(() => {
        navigate("/admin/list-meja/user/loggedin");
      });
    } catch (err) {
      console.error("Error updating data:", err);
      setError("Gagal memperbarui data meja");
    } finally {
      setSubmitLoading(false);
    }
  };

  useEffect(() => {
    if (mejaId) {
      fetchingListMeja();
    }
  }, [mejaId]);

  // console.log(typeof listMeja === "object");
  console.log(listMeja);

  return (
    <AdminLayout title="Edit List Meja" description="Edit Data Meja">
      {/* <Breadcrumb /> */}
      <div className="bg-white p-10 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Edit Data Meja
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="noMeja"
                className="block text-gray-700 font-medium mb-2"
              >
                No. Meja
              </label>
              <input
                type="number"
                id="noMeja"
                name="noMeja"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={listMeja[0]?.noMeja}
                onChange={(e) => handleInputChange(e, 0)}
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium mb-2"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={listMeja[0]?.status ?? "Available"}
                onChange={(e) => handleInputChange(e, 0)}
                required
              >
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
                <option value="reserved">Reserved</option>
                <option value="cleaning">Cleaning</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="waktuPemesanan"
                className="block text-gray-700 font-medium mb-2"
              >
                Waktu Pemesanan
              </label>
              <input
                type="datetime-local"
                id="waktuPemesanan"
                name="waktuPemesanan"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={listMeja[0]?.waktuPemesanan ?? ""}
                onChange={(e) => handleInputChange(e, 0)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="note"
                className="block text-gray-700 font-medium mb-2"
              >
                Catatan
              </label>
              <textarea
                name="note"
                id="note"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={listMeja[0]?.note ?? ""}
                onChange={(e) => handleInputChange(e, 0)}
                placeholder="Masukkan catatan (opsional)"
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                color="secondary"
                className="flex-1"
                onClick={() => navigate("/admin/list-meja/user/loggedin")}
                disabled={submitLoading}
              >
                Batal
              </Button>
              <Button
                type="submit"
                color="primary"
                className="flex-1"
                disabled={submitLoading}
              >
                {submitLoading ? "Menyimpan..." : "Simpan Perubahan"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default EditListMejaPage;
