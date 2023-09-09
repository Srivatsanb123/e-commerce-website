'use client'; // Enforce strict mode

import React from 'react';
import Footer from '../components/Footer';
import Link from 'next/link'; // Import Link

function AboutPage() {
  return (
    <div>
      <h1 className="bg-cyan-600 text-4xl text-center font-semibold p-4">
        E-commerce Website
        <Link href="/">
          <a className="text-center text-lg cursor-pointer text-black float-right">Home</a>
        </Link>
      </h1>
      <div className="container mx-auto mt-4">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          Welcome to our online electronics store! We are passionate about providing you with a wide range of high-quality electronic products at competitive prices. Our goal is to make technology accessible to everyone, whether you&apos;re a seasoned tech enthusiast or a casual user looking for reliable gadgets.
        </p>
        <p>
          At E-commerce Website, we carefully curate our selection of products to ensure they meet the highest standards of quality and performance. Our team of experts stays up-to-date with the latest trends and innovations in the electronics industry to bring you the most cutting-edge products.
        </p>
        <p>
          Customer satisfaction is our top priority. We pride ourselves on providing excellent customer service, quick shipping, and hassle-free returns. If you have any questions or need assistance, our friendly support team is always here to help.
        </p>
        <p>
          Thank you for choosing E-commerce Website for all your electronic needs. We look forward to serving you and being a part of your tech journey!
        </p>
        <p>&copy; Srivatsan B</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
