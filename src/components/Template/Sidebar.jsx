// Tempat membuat aside dibagian sebelah kiri
// Untuk menempatkan logo dan pemilihan warna
// Merupakan bagian utama
// import {Plus}.... kemudian menuliskan di dalma div nya <Plus/> untuk menambahkan icon +
// menggunakan use client untuk menambah action yang ditulis dibawah export dengan code berikut
// action perlu diimport kemudian setelah diimport perlu dituliskan dibawah export

"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  // Code berikut untuk menambahkan action
  //Artinya
  const [onAddMode, setOnAddMode] = useState(false);

  return (
    <div>
      <aside className="w-[90px] border-r-2 bg-red flex flex-col items-center p-8 space-y-4">
        <div className="font-bold">Me.</div>
        <div>
          {/* Dibawah ini merupakan action dari code const [onAddMode, setonAddMode] = useState(false); */}

          <div
            //Penambahan ! artinya explanasion
            // Berfungsi untuk invert, jika onAddMode di atas adalah (false) maka dengan menambahkan ! onAddMode beruabah menjadi true
            // Sederhananya jika cursor tempatkan di icon + maka hasilkanya true dan jika tidak maka hasilnya false
            onClick={() => setOnAddMode(!onAddMode)}
            className="w-8 h-8 bg-slate-800 text-slate-400 hover:text-slate-100 transition duration-300 rounded-full flex justify-center items-center cursor-pointer"
          >
            {/*// Berikut penerapan onAddMode nya dalam icon // */}
            {/* Icon + didlaam lingkaran diputar ketika di click */}
            <Plus
              className={
                onAddMode
                  ? "rotate-45 transition duration-300"
                  : "rotate-0 transition duration-300"
              }
            />
          </div>
        </div>
        <div>
          {/* Ini merupakan warna */}
          {/* Conditional rendering dengan menuliskan {onAddMode ? "diisi kondisi ketika diclick ditulis disini": "diisi kondisi ketika tidak diclick" } */}
          {/* Penulisan Conditional rendering pada className={onAddMode ? " " : " "} */}
          {/* Ada z index yaitu layer dalam membuat objek, agar bisa di atas dan kebawahin maka gunakan z  */}
          <div className="flex flex-col items-center space-y-4">
            <div
              className={
                onAddMode
                  ? "bg-yellow-400 w-5 h-5 rounded-full translate-y-10 -z-10 transition duration-300"
                  : "bg-yellow-400 w-5 h-5 rounded-full  -translate-y-10 -z-10 transition duration-300"
              }
            ></div>
            <div
              className={
                onAddMode
                  ? "bg-rose-400 w-5 h-5 rounded-full translate-y-20 -z-10 transition duration-300"
                  : "bg-rose-400 w-5 h-5 rounded-full  -translate-y-20 -z-10 transition duration-300"
              }
            ></div>
          </div>
        </div>
      </aside>
      <section></section>
    </div>
  );
};

export default Sidebar;
