import { AdminLayout } from "../../components/AdminLayout/AdminLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import Button from "../../components/Button";

const CreateListMejaPage = () => {
  return (
    <AdminLayout title="Create List Meja" description="Tambah List Meja Baru">
      <Breadcrumb />
      <div className="bg-white p-10 rounded-lg shadow-lg w-full ">
        <h2 className="text-3xl font-semibold mb-6  text-gray-800">
          Tambah Data Meja
        </h2>
        <form action="#" method="POST">
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
              className="w-full px-4 py-3 border rounded-lg"
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
              className="w-full px-4 py-3 border rounded-lg"
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
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="catatan"
              className="block text-gray-700 font-medium mb-2"
            >
              Catatan
            </label>
            <textarea
              name="catatan"
              id="catatan"
              className="w-full px-4 py-3 border rounded-lg"
            ></textarea>
          </div>

          <Button color="primary" size="lg" className="w-full">
            Tambah data
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateListMejaPage;
