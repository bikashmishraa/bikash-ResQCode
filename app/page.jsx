import Navbar from "./component/Navbar";
import Composition from "./component/Composition";
export default function Home() {
  return (
    <div>
    <div className="min-h-screen bg-[url('/bg_main.png')] bg-center bg-cover">
        <Navbar />
    </div>
        <Composition />

        </div>
  );
}