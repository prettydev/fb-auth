import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="w-11/12 md:w-2/3 xl:w-1/3 mx-auto my-12">
        <Header />
        <main className="flex flex-col gap-12">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
