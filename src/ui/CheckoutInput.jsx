function CheckoutInput({ placeholder, type, id = "" }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      className="flex md:h-12 h-10 w-full rounded-md border border-[#bdb6b6] border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 ring-brand-500 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}

export default CheckoutInput;
