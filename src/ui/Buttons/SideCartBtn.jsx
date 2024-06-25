function SideCartBtn({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="border-2 text-center py-4 text-lg font-giftingDesc font-medium m-4 hover:bg-[#000] cursor-pointer hover:border-[#000] hover:text-[#fff]"
    >
      {children}
    </div>
  );
}

export default SideCartBtn;
