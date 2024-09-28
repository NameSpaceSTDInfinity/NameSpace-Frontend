import Ava from "../components/Avatar";
import Nav from "../components/Nav";
import Speedometer from "@/components/Speedometer";
import Upload from "@/components/Upload";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Ava />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Speedometer />
          </div>
          <div>
            <Upload />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
