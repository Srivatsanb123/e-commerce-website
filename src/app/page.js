'use client'; // Enforce strict mode

import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Image from 'next/image'; // Import Image component from next/image
import Link from 'next/link'; // Import Link

const products = [
  {
    "id": 1,
    "name": "Apple iPad (9th Generation)",
    "price": 267.29,
    "image": "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg"
  },
  {
    "id": 2,
    "name": "SAMSUNG Galaxy Buds Pro True Wireless Bluetooth Earbuds",
    "price": 159.99,
    "image": "https://m.media-amazon.com/images/I/719p0eyZiSL._AC_UL480_QL65_.jpg"
  },
  {
    "id": 3,
    "name": "Apple EarPods Headphones with Lightning Connector",
    "price": 15.24,
    "image": "https://m.media-amazon.com/images/I/41-aexp44tL._AC_UL480_QL65_.jpg"
  },
  {
    "id": 4,
    "name": "Nintendo Switch with Neon Blue and Neon Red Joy-Con",
    "price": 298,
    "image": "https://m.media-amazon.com/images/I/71pIS8f417L._AC_UL600_FMwebp_QL65_.jpg"
  },
  {
    "id": 5,
    "name": "Apple MagSafe Charger",
    "price": 33,
    "image": "https://m.media-amazon.com/images/I/71f792LZY2L._AC_UL600_FMwebp_QL65_.jpg"
  },
  {
    "id": 6,
    "name": "VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync",
    "price": 168,
    "image": "https://m.media-amazon.com/images/I/81YMd8mWQ+L._AC_UL600_FMwebp_QL65_.jpg"
  },
  {
    "id": 7,
    "name": "Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones",
    "price": 44.99,
    "image": "https://m.media-amazon.com/images/I/61O7S27O+jL._AC_UL600_FMwebp_QL65_.jpg"
  },
  {
    "id": 8,
    "name": "Epson EcoTank ET-2800 Wireless Color",
    "price": 199.99,
    "image": "https://m.media-amazon.com/images/I/71vQVROVQ4L._AC_UL600_QL65_.jpg"
  },
  {
    "id": 9,
    "name": "SAMSUNG 870 EVO SATA III SSD 1TB 2.5” Internal Solid State Drive",
    "price": 59.99,
    "image": "https://m.media-amazon.com/images/I/911ujeCkGfL._AC_UL600_FMwebp_QL65_.jpg"
  },
  {
    "id": 10,
    "name": "HP 64 Black/Tri-color Ink Cartridges (2-pack)",
    "price": 41.89,
    "image": "https://m.media-amazon.com/images/I/719v4HTY9OL._AC_UL600_FMwebp_QL65_.jpg"
  },
  {
    "id": 11,
    "name": "KYY Portable Monitor 15.6inch 1080P FHD USB-C Laptop Monitor",
    "price": 129.99,
    "image": "https://m.media-amazon.com/images/I/81rsMys9S8L._AC_UL600_FMwebp_QL65_.jpg"
  },
  {
    "id": 12,
    "name": "Syntech USB C to USB Adapter Pack of 2",
    "price": 10.99,
    "image": "https://m.media-amazon.com/images/I/71xWh67sBNL._AC_UL600_FMwebp_QL65_.jpg"
  }
];

const bannerImages = [
  'https://mlv7w27xbskj.i.optimole.com/9K6CnE8-qwMJQo4-/w:auto/h:auto/q:auto/https://toledogoldexchange.com/wp-content/uploads/2017/02/electronics-sale-banner-2._V346923865_.png',
  'https://1.bp.blogspot.com/-K23yk2qs1MI/Xr8Oor_OIUI/AAAAAAAAdHE/9fonl-jUs4UxKqx4uVxJjVjt7rUgp1VzgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Electronic%2BSales%2BPoster.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/178/517/original/vector-sale-discount-and-offer-marketing-banner-template-design.jpg',
];

function ProductsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="bg-cyan-600 text-4xl text-center font-semibold p-4">
        E-commerce Website
        <Link href="/about">
          <a className="text-center text-lg cursor-pointer text-black float-right">About</a>
        </Link>
      </h1>
      <div className="container mx-auto mt-4 mb-4">
        <div className="banner-container">
          <Image
            src={bannerImages[currentImageIndex]}
            alt="Banner"
            width={800} // Set the appropriate width
            height={400} // Set the appropriate height
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 flex flex-col items-center justify-between shadow rounded"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200} // Set the appropriate width
                height={200} // Set the appropriate height
              />
              <h2 className="text-black text-xl font-semibold my-2">
                {product.name}
              </h2>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;