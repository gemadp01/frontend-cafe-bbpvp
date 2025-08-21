import Button from "../components/Button";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <section
        id="section-intro"
        className="text-center box-border p-4 flex flex-col basis-1 md:text-left md:flex-row"
      >
        <div className="space-y-3 order-2 md:order-1 md:flex md:flex-col md:items-start md:justify-center">
          <h2 className="text-xl font-bold mb-1">Find a Cafe?</h2>
          <h3 className="text-xl font-bold">
            Then you are <br /> the right place.
          </h3>
          <p className="text-textColor-1">
            Temukan café favorit, lihat meja yang kosong, dan cek menu yang lagi
            ready, semua dari HP kamu.
          </p>
          <Button>
            <a href="#">Explore Cafe</a>
          </Button>
        </div>
        <div className="order-1 md:order-2">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="cafe"
            />
          </figure>
        </div>
      </section>
      <section id="section-supported" className="min-h-14 bg-bgColor-2">
        <div>
          {/* <figure>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="cafe"
              />
            </figure> */}
        </div>
      </section>
      <section id="section-description" className="text-center w-3/4 mx-auto">
        <h2 className="text-3xl font-bold ">
          Our mission is to bring <br />
          happiness to <br />
          our customers.
        </h2>
        <p className="text-textColor-1 font-light">
          Kami selalu mendengarkan masukan, memperbaiki kekurangan, dan
          menghadirkan fitur-fitur baru supaya Anda bisa menikmati pengalaman
          yang lebih nyaman dan menyenangkan setiap kali menggunakan layanan
          kami.
        </p>
      </section>
    </Layout>
  );
}

export default HomePage;
