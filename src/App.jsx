import "./App.css";
import Footer from "./components/Footer";
import CustomForm from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <Layout>
        <CustomForm />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
