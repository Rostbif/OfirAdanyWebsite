import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-10 grow flex">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
