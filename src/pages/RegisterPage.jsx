import { ArrowRightIcon, EyeIcon, Link } from "lucide-react";
import Button from "../components/Button";
import Map from "../components/Map";
import Layout from "../components/Layout";

function RegisterPage() {
  return (
    <Layout>
      <div className="container min-h-screen my-50 flex justify-center items-center">
        <div className="w-2xl mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1 text-center">
            Register
          </h2>
          <form autoComplete="off">
            <p className="text-red-500" />
            <div className="space-y-2">
              <div>
                <label htmlFor="username" className="text-primary mb-2 block" />
                Username
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Masukkan Username"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="password" className="text-primary mb-2 block" />
                Password
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                    placeholder="Masukkan Password"
                  />
                  <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-primary border-l border-gray-300">
                    <EyeIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="namaCafe" className="text-primary mb-2 block" />
                Nama Cafe
                <input
                  type="text"
                  name="namaCafe"
                  id="namaCafe"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Masukkan Nama Cafe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label
                  htmlFor="lokasiCafe"
                  className="text-primary mb-2 block"
                />
                Lokasi
                <input
                  type="text"
                  name="lokasiCafe"
                  id="lokasiCafe"
                  className="block w-full border border-gray-300 px-4 py-3 text-primary text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Masukkan Lokasi Cafe"
                />
                <Map />
              </div>
            </div>
            <div className="mt-4">
              <Button type="submit" className="w-full">
                Create an Account <ArrowRightIcon className="w-4 h-4 inline" />
              </Button>
              <div className="flex gap-2 pt-5">
                <p className="text-primary text-sm">
                  Already have an account?{" "}
                </p>
                <Link className="text-primary text-sm underline" to="/login">
                  Login here!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default RegisterPage;
