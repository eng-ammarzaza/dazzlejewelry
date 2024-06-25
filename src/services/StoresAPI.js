import supabase from "./supabase";

export async function getStores() {
  let { data: stores, error } = await supabase.from("stores").select("*");
  if (error) {
    console.log(error);
    throw new Error("Stores couldn't be fetched");
  }
  return stores;
}
export async function getStore(name) {
  let { data: stores, error } = await supabase
    .from("stores")
    .select("*")
    .eq("name", name);
  if (error) {
    console.log(error);
    throw new Error("Stores couldn't be fetched");
  }
  return stores;
}
