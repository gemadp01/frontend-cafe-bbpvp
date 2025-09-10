import Button from "@/components/Button";

const IntroSection = () => {
  return (
    <section
      id="section-intro"
      className="min-h-screen text-center box-border px-4 my-8 flex flex-col basis-1 justify-center items-center gap-y-6 md:text-left md:flex-row"
    >
      <div className="space-y-3 order-2 md:order-1 md:flex md:flex-col md:items-start md:justify-center">
        <h2 className="text-xl font-semibold ">Find a Cafe?</h2>
        <h3 className="text-2xl font-bold">
          Then you are <br /> the right place.
        </h3>
        <p className="text-textColor-1 font-light">
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
  );
};

export default IntroSection;
