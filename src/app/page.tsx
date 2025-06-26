import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Notification from "./components/Notification";

export default function Home() {
  return (
    <>
    <section
     className="
     w-full
     h-screen
     z-1
     section
     ">
      <Notification />
      <Navbar />
      <Main />
     </section>
    </>
  );
}
