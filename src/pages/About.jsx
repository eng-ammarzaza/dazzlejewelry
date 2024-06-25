import { useEffect, useLayoutEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Dazzle: About";
    return function () {
      document.title = "Dazzle";
    };
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bm text-lg font-giftingDesc">
      <p className="text-4xl font-cinzel font-semibold my-6 border-b-4 border-brand-500 pb-4">
        About Us:
      </p>
      <p>
        Dazzle is a premier jewelry store based in Australia, offering exquisite
        pieces designed to make you shine and sparkle. With multiple locations
        throughout Australia and other countries in Asia, Dazzle is your go-to
        destination for luxury jewelry. We pride ourselves on offering a diverse
        selection of high-quality jewelry that is both fashionable and timeless.
        From elegant diamond necklaces to trendy statement earrings, we have
        something for every style and occasion. Our team of expert jewelers and
        designers work tirelessly to curate a collection of jewelry that is sure
        to dazzle and impress. Whether you're looking for a special gift or a
        treat for yourself, Dazzle has the perfect piece for you. At Dazzle, we
        believe that jewelry is an expression of your unique style and
        personality. That's why we strive to offer a wide range of designs, from
        classic to contemporary, to suit every taste. Customer satisfaction is
        our top priority at Dazzle. Our friendly and knowledgeable staff are
        here to help you find the perfect piece of jewelry that you will love
        and cherish for years to come. Visit one of our stunning stores in
        Australia or Asia to experience the magic of Dazzle in person. Our
        beautifully curated displays and expert staff will help you find the
        perfect piece to add to your collection.
      </p>

      <p className="my-6">
        Dazzle is committed to sourcing ethically and sustainably produced
        materials for our jewelry. We believe in creating beautiful pieces that
        are not only stunning but also responsible. Our dedication to quality
        craftsmanship and attention to detail is evident in every piece of
        jewelry we offer. Each item is carefully inspected and certified to
        ensure it meets our high standards. Whether you're looking for a
        stunning engagement ring, a shimmering bracelet, or a dazzling pair of
        earrings, Dazzle has something for everyone. Our collection includes a
        wide range of styles, metals, and gemstones to suit your individual
        preferences. With Dazzle, you can shop with confidence knowing that you
        are investing in a piece of jewelry that is as unique and special as you
        are. Our commitment to excellence shines through in every piece we
        create. We strive to provide exceptional customer service at Dazzle,
        ensuring that your shopping experience is stress-free and enjoyable. Our
        knowledgeable staff are here to assist you with any questions or
        concerns you may have.
      </p>
      <div className="bg-[url('/about.jpg')] h-[525px] my-8 rounded-full">
        <div className="bg-[#000] bg-opacity-50 h-full w-full flex items-center rounded-full">
          <p className="md:text-6xl text-3xl font-bondi  uppercase font-medium text-[#fff] md:px-36 px-20 tracking-widest">
            At Dazzle, we believe that jewelry is more than just an accessory.
          </p>
        </div>
      </div>
      <p>
        At Dazzle, we believe that jewelry is more than just an accessory - it's
        a symbol of love, beauty, and individuality. Our stunning pieces are
        designed to enhance your natural beauty and bring out your inner
        sparkle. From classic diamond solitaires to modern geometric designs,
        Dazzle offers a wide range of styles to suit every taste and occasion.
        Whether you prefer understated elegance or show-stopping glamour, we
        have the perfect piece for you. With a commitment to quality and
        excellence, Dazzle is the place to find the perfect piece of jewelry to
        mark life's special moments. From birthdays and anniversaries to
        weddings and graduations, we have the perfect piece to celebrate every
        occasion. Dazzle is more than just a jewelry store - it's a destination
        for beauty, elegance, and luxury. Our stunning pieces are designed to
        make you feel special and radiant, no matter the occasion. We are proud
        to be a part of the vibrant jewelry community in Australia and Asia, and
        we are committed to sharing our passion for fine craftsmanship and
        design with our customers. Visit us today to experience the magic of
        Dazzle for yourself.
      </p>
      <p className="mt-6">
        At Dazzle, we believe that every piece of jewelry tells a story. Let us
        help you find the perfect piece to add to your collection and create a
        lasting memory that you will cherish for years to come. From timeless
        classics to modern trends, Dazzle offers a diverse selection of jewelry
        that is sure to impress. Visit us today to discover the beauty and
        elegance of Dazzle's exquisite pieces.
      </p>
    </div>
  );
}

export default About;
