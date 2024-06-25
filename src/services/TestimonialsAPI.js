import supabase from "./supabase";

export async function getTestimonials() {
  let { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("*");

  if (error) {
    console.log(error);
    throw new Error("testimonials coudn't be loaded");
  }
  return testimonials;
}
