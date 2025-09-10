const DescriptionSection = () => {
  return (
    <section
      id="description-section"
      className="min-h-[80vh] text-center box-border px-4 my-8 flex flex-col basis-1 justify-center items-center gap-y-6"
    >
      <h2 className="text-3xl font-bold ">
        Our mission is to bring <br />
        happiness to <br />
        our customers.
      </h2>
      <p className="text-textColor-1 font-light md:w-3/4 lg:w-1/2">
        Kami selalu mendengarkan masukan, memperbaiki kekurangan, dan
        menghadirkan fitur-fitur baru supaya Anda bisa menikmati pengalaman yang
        lebih nyaman dan menyenangkan setiap kali menggunakan layanan kami.
      </p>
    </section>
  );
};

export default DescriptionSection;
