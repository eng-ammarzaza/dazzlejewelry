const background = {
  oneandonly: "/one&onlybackground.jpg",
  gemstone: "/gemstonebackground.jpg",
  pearls: "/pearlbackground.jpg",
  diamond: "/diamondbackground.jpg",
};

function CollectionHeader({ collection }) {
  return (
    <div
      style={{
        "--image-url": `url(${background[collection]}) `,
      }}
      className={`h-[450px] bg-[image:var(--image-url)] bg-cover`}
    >
      <div className="bg-gradient-to-t from-[#000] flex flex-col gap-5 items-center py-24 text-[#fff]  h-[450px]">
        <p className="font-fairytale md:text-8xl text-5xl">
          Fairytale collections
        </p>
        <p className="md:text-2xl font-giftingDesc">introduce special</p>
        <p className="uppercase font-bold md:text-xl text-sm font-cinzel tracking-[0.5rem]">
          {collection === "oneandonly" ? "one & only" : collection} collection
        </p>
      </div>
    </div>
  );
}

export default CollectionHeader;
