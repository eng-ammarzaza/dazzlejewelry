import StoreBtn from "../../ui/Buttons/storeButton/StoreBtn";
import Heading from "../../ui/Heading";
import "./customeAnimation.css";
function StoresHomeSection({ stores }) {
  return (
    <div className="mt-20">
      <Heading>Our Stores</Heading>
      <div className="bm">
        <div className="relative w-full h-40 pb-8 overflow-hidden">
          <div className="w-full h-40 absolute left-0 top-0 flex items-center justify-around primary">
            {stores.map((store) => (
              <StoreBtn key={store.id}>{store.name}</StoreBtn>
            ))}
          </div>
          <div className="w-full h-40 absolute left-0 top-0 flex mx-10 md:mx-0 items-center justify-around secondary">
            {stores.map((store) => (
              <StoreBtn key={store.id}>{store.name}</StoreBtn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default StoresHomeSection;
