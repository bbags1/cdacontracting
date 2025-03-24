import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/photos/kitchens.jpg"
          alt="Beautiful kitchen remodel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Quality Craftsmanship in Coeur d'Alene</h1>
            <p className="text-xl mb-8">Transform your home with our expert renovation services</p>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Kitchen Remodels</h3>
              <p className="text-gray-600">Custom kitchen designs that combine functionality with stunning aesthetics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Bathroom Renovations</h3>
              <p className="text-gray-600">Transform your bathroom into a luxurious and relaxing space.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Carpentry</h3>
              <p className="text-gray-600">Expert craftsmanship in sauna construction, trim work, and custom carpentry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/photos/bathrooms13.jpg"
                alt="Luxury bathroom remodel"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/photos/IMG_6824.JPG"
                alt="Custom interior design"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/photos/IMG_8791.jpg"
                alt="Modern home renovation"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
