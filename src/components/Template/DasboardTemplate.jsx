// Menu dari Sidebar di import ke sini dengan format dibawah ini

import Sidebar from "./Sidebar";

export const DasboardTemplate = () => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section style={{ width: "calc(100vw - 90px)" }}>tes</section>
    </main>
  );
};

export default DasboardTemplate;
