import supabase from "./supabase";

export async function getProductsForHome() {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("collection", "normal")
    .neq("bestSeller", true)
    .limit(6);

  if (error) {
    console.log(error);
    throw new Error("Products couldn't be loaded");
  }
  return products;
}

export async function getProducts({ collection }) {
  let query = supabase
    .from("products")
    .select("*", { count: "exact" })
    .eq("collection", collection);

  let { data: products, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Products couldn't be loaded");
  }
  return { products, count };
}

export async function getProduct(id) {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);
  //complete the look
  let { data: similarProducts, similarProductsError } = await supabase
    .from("products")
    .select("*")
    .eq("lookSet", product[0].lookSet)
    .neq("id", product[0].id)
    .neq("category", product[0].category);

  if (error) {
    throw new Error("Product couldn't be loaded");
  }

  if (similarProductsError) {
    throw new Error("Similar Products couldn't be loaded");
  }
  return [product, similarProducts];
}

export async function getBestSellerProducts() {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("bestSeller", "true");

  if (error) {
    console.log(error);
    throw new Error("Products couldn't be loaded");
  }
  return products;
}
