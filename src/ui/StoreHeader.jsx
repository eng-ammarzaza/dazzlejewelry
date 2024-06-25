function StoreHeader({ store }) {
  return (
    <div
      style={{ "--image-url": `url(${store.image})` }}
      className={`max-w-dvw md:h-[480px] max-h-[480px] bg-[image:var(--image-url)] bg-cover`}
    >
      <div className="bg-[#000] bg-opacity-45 flex py-24 text-[#fff]  md:h-[480px] max-h-[480px]">
        <div className="m-auto text-center">
          <p className="md:text-2xl font-giftingDesc uppercase">
            Welocome to dazzle branch in
          </p>
          <p className="uppercase mt-4 font-bold font-store md:text-7xl text-3xl md:tracking-[2rem] tracking-[1rem] border-b-4 border-brand-500 pb-3">
            {store.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoreHeader;
