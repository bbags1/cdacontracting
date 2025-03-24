export const metadata = {
  title: 'Contact Us | CDA Contracting',
  description: 'Get in touch with CDA Contracting for your home renovation needs in Coeur d\'Alene, Idaho. Free estimates and consultations available.',
}

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Ready to start your project? Get in touch with us for a free consultation and estimate. We serve Coeur d'Alene and surrounding areas.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900">Phone</h3>
              <div className="space-y-2">
                <p className="text-gray-600 text-xl">
                  Brody: <a href="tel:3609773487" className="hover:text-gray-900 transition">(360) 977-3487</a>
                </p>
                <p className="text-gray-600 text-xl">
                  Kira: <a href="tel:7759807160" className="hover:text-gray-900 transition">(775) 980-7160</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-gray-600 text-lg">
                <a href="mailto:vancouvertileandbath@gmail.com" className="hover:text-gray-900 transition">
                  vancouvertileandbath@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Service Area</h2>
          <p className="text-gray-600 mb-4">
            We proudly serve Coeur d'Alene and surrounding areas including:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2">•</span> Post Falls
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Hayden
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Rathdrum
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Spirit Lake
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Dalton Gardens
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 