import ContactForm from "./components/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <main className="w-full px-4 py-6 text-customGreen-900">
      <ToastContainer
        style={{
          maxWidth: "max-content",
          width: "100%",
        }}
        toastStyle={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        position="top-center"
        autoClose={3000}
        hideProgressBar
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ContactForm />
    </main>
  );
}

export default App;
