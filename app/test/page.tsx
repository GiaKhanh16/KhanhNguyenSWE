"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products: Product[] = [
  {
    href: "https://example.com/product1",
    slug: "product1",
    thumbnail: "/images/product1-thumbnail.jpg",
    title: "Product One",
    description:
      "A revolutionary app for task management with real-time collaboration.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    href: "https://example.com/product2",
    slug: "product2",
    thumbnail: "/images/product2-thumbnail.jpg",
    title: "Product Two",
    description: "An AI-powered analytics platform for business insights.",
    stack: ["Python", "TensorFlow", "Next.js"],
  },
  {
    href: "https://example.com/product3",
    thumbnail: "/images/product3-thumbnail.jpg",
    title: "Product Three",
    description: "A lightweight CMS for blogs and small websites.",
    stack: ["WordPress", "PHP", "MySQL"],
  },
];

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              key={product.href}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={product.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.title}
                  </h4>
                  <p className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </p>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;

interface Product {
  href: string; // URL or external link for the product
  slug?: string; // Optional slug for internal project pages (e.g., `/projects/${slug}`)
  thumbnail: string; // URL or path to the thumbnail image
  title: string; // Product title
  description: string; // Product description
  stack?: string[]; // Optional array of tech stack tags
}