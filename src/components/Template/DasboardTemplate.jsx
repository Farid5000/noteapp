// Menu dari Sidebar di import ke sini dengan format dibawah ini
// Sidebar menu disebelah kiri
// Search menu pencarian disebelah atas
import Sidebar from "./Sidebar";
import SearchBar from "../App/SearchBar";

export const DasboardTemplate = ({ children }) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="w-[calc(100vw-90px)] p-7 space-y-8 ">
        <SearchBar />
        <div>{children}</div>
      </section>
    </main>
  );
};

export default DasboardTemplate;
