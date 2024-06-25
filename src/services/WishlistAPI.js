import supabase from "./supabase";

export async function getWishlist(customerID) {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error: userError } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  let { data: wishlist, error } = await supabase
    .from("wishlist")
    .select(
      `
    productID,
    products (
      id, name, image, price, discount, inStock, bestSeller
    )
  `
    )
    .eq("customerID", data?.user.id);

  if (error) throw new Error(error.message);

  return wishlist;
}

export async function checkWishlist(productID, customerID) {
  let { data: wishlist, error } = await supabase
    .from("wishlist")
    .select("*")
    .eq("productID", productID)
    .eq("customerID", customerID);

  if (error) throw new Error(error.message);

  return wishlist;
}

export async function addToWishlist(customerID, productID) {
  console.log(typeof customerID, customerID);
  console.log(typeof productID, productID);

  const { data, error } = await supabase
    .from("wishlist")
    .insert([{ customerID: customerID, productID: productID }]);

  if (error) throw new Error(error.message);
  return data;
}

export async function removeFromWishlist(productID, customerID) {
  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("productID", productID)
    .eq("customerID", customerID);

  if (error) throw new Error(error.message);
}
