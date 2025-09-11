import clsx from "clsx";

export const CafeTable = (props) => {
  const statusColor = (status) => {
    const colors = {
      available: "bg-green-100 text-green-800",
      occupied: "bg-red-100 text-yellow-800",
      reserved: "bg-red-100 text-yellow-800",
      cleaning: "bg-yellow-100 text-yellow-800",
    };

    const colorClass = colors[status];

    return (
      <span
        className={clsx(
          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
          colorClass
        )}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mb-12">
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                No Meja
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Waktu Pemesanan
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Catatan
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {props.dataListMeja.map((meja) => (
              <tr key={meja._id}>
                <td className="py-4 px-6 border-b border-gray-200">
                  {meja.noMeja}
                </td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  {meja.waktuPemesanan}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {meja.note}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {statusColor(meja.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
