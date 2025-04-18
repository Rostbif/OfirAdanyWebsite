import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="container mx-auto py-10 px-10 grow flex flex-col modern-layout">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
