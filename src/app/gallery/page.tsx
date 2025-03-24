import Image from 'next/image'
import fs from 'fs'
import path from 'path'

// This is a server component, so we can use Node.js fs module
function getPhotos() {
  const photosDirectory = path.join(process.cwd(), 'public/photos')
  const fileNames = fs.readdirSync(photosDirectory)
  
  return fileNames
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map(fileName => ({
      src: `/photos/${fileName}`,
      alt: fileName
        .replace(/\.[^/.]+$/, '') // Remove file extension
        .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
        .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
        .trim()
    }))
}

export const metadata = {
  title: 'Project Gallery | CDA Contracting',
  description: 'View our portfolio of completed projects including kitchen remodels, bathroom renovations, custom trim work, and flooring installations in Coeur d\'Alene.',
}

export default function Gallery() {
  const photos = getPhotos()
  
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Project Gallery</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Browse through our collection of completed projects. Each photo represents our commitment to quality craftsmanship and attention to detail.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-[4/3] w-full group">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-end">
              <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-xl mb-6">Ready to start your project?</p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  )
} 