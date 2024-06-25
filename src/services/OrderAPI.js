import supabase from "./supabase";

export async function createOrder(
  cart,
  orderInfo,
  payMethod,
  bill,
  fastShipping
) {
  const { data, error } = await supabase.from("orders").insert([
    {
      cart: cart,
      order_info: orderInfo,
      payment_method: payMethod,
      bill: bill,
      fastShipping: fastShipping,
    },
  ]);

  if (error) throw new Error(error.message);

  return data;
}
