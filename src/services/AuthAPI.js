import supabase from "./supabase";

export async function signup({ fullName, email, password, birthday }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        birthday,
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function login({ email, password }) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return false;

  return true;
}

export async function getCurrUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();

  if (error) throw new Error("User enable to fetch!");
  return user;
}

export async function getCurrUserID() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function getSession() {
  const { data: session, error } = await supabase.auth.getSession();
  if (!session.session) return null;

  if (error) throw new Error(error.message);

  return session;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
