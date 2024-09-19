import Body from "./components/Body/Body";
import NavBar from "./components/Navbar/NavBar";
import Section from "./components/Section/Section";

export default function App(){
  return (
    <div className="p-container h-screen">
      <NavBar />
      <Section />
      <Body />
    </div>
  );
}