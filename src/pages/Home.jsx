import Hero from "../ui/Hero";
import ProductsHomeCard from "../features/products/ProductsHomeCard";
import Heading from "../ui/Heading";
import GiftingSection from "../ui/GiftingSection";
import FairytaleHomeSection from "../ui/FairytaleHomeSection";
import StoresHomeSection from "../features/stores/StoresHomeSection";
import Testimonials from "../features/testimonial/Testimonials";
import {
  getBestSellerProducts,
  getProductsForHome,
} from "../services/ProductsAPI";
import { useLoaderData } from "react-router-dom";
import { getStores } from "../services/StoresAPI";
import { getTestimonials } from "../services/TestimonialsAPI";
import { useEffect, useLayoutEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = "Dazzle: Home";
    return function () {
      document.title = "Dazzle";
    };
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = useLoaderData();
  return (
    <>
      <Hero />
      <Heading>Dazzle's Best Seller</Heading>
      <ProductsHomeCard products={data[1]} type={"best-seller"} />
      <Heading>Our Jewelry</Heading>
      <ProductsHomeCard products={data[0]} />
      <FairytaleHomeSection />
      <StoresHomeSection stores={data[2]} />
      <GiftingSection />
      <Testimonials testimonials={data[3]} />
    </>
  );
}
export async function loader() {
  const products = await getProductsForHome();
  const bestSellerProducts = await getBestSellerProducts();
  const stores = await getStores();
  const testimonials = await getTestimonials();
  const data = [products, bestSellerProducts, stores, testimonials];

  return data;
}
export default Home;
