import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Notification from "./components/Notification";

export default function Home() {
  return (
    <>
    <section
     className="
     section
     ">
      <Notification />
      <Navbar />
      <Main />
     </section>
    </>
  );
}
