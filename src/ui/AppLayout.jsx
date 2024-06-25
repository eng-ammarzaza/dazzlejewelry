import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
      <Footer />
    </>
  );
}

export default AppLayout;
