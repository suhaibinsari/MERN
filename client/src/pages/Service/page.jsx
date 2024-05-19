// import { useEffect } from 'react';
import { useAuth } from '../../store/auth';

export default function Service() {
  const { services } = useAuth();

  console.log(services);



  return (
    <>
      <div className="bg-gray-300 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Introducing Our Latest Product</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services && services.map((currElem, index) => (
              <div className="bg-white rounded-lg shadow-lg p-8" key={index}>
                <div className="relative overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    alt="Product"
                  />
                  <div className="absolute inset-0 bg-black opacity-40" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{currElem.provider}</h3>
                <p className="text-gray-500 text-sm mt-2">{currElem.service}</p>
                <p className="text-gray-500 text-sm mt-2">{currElem.description}</p>
                <div className="flex items-center justify-start mt-4">
                  <span className="text-gray-900 font-bold text-lg">${currElem.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
