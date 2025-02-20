import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Minha Agência</h1>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#services" className="hover:text-blue-600">Serviços</a>
          <a href="#about" className="hover:text-blue-600">Sobre</a>
          <a href="#contact" className="hover:text-blue-600">Contato</a>
        </nav>
      </div>

      {/* Menu Mobile (Lateral Esquerdo) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <button className="self-end text-gray-700" onClick={() => setMenuOpen(false)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <nav className="mt-8 flex flex-col gap-4 text-lg">
            <a href="#services" className="hover:text" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#about" className="hover:text" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#contact" className="hover:text" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>

          <div className="flex-grow" onClick={() => setMenuOpen(false)}></div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
