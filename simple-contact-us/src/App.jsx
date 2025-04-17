import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import DisplayFormInfo from "./components/DisplayFormInfo";

function App() {
  const initialData = [];
  let [formData, setFormData] = useState(initialData);

  const newData = (name, email, text) => {
    setFormData({
      name,
      email,
      text,
    });
  };

  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm onSubmit={newData} />
        <DisplayFormInfo formData={formData} />
      </main>
    </div>
  );
}

export default App;
