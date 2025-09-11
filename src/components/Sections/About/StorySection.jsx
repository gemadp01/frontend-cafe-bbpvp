const StorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Short Story
            </h2>
            <div className="space-y-4 text-textColor-1 leading-relaxed">
              <p>
                Cafe Finder lahir dari keresahan saya. Pada April 2025, saya
                menyadari bahwa menemukan kafe yang sesuai, baik dari segi
                ketersediaan menu maupun ketersediaan meja ternyata cukup sulit.
              </p>
              <p>
                Dari sinilah ide untuk menciptakan platform yang tidak hanya
                membantu menemukan cafe, tetapi juga memberikan informasi
                lengkap tentang menu, dan ketersediaan tempat secara real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
