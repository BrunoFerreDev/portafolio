function Header() {
  return (
    <header className="bg-gray-500 p-4 mt-2 rounded-lg">
      <div className="container mx-auto gap-4 flex flex-wrap justify-center items-center lg:justify-between">
        <div className="flex items-center justify-center ">
          {/* <img src="../assets/react.svg" alt="Logo" /> */}
          <h1 className="text-white text-2xl font-bold">
            Bruno Marcos Ferreira{" "}
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-white hover:text-gray-400">
                Sobre Mi
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-gray-400">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#education" className="text-white hover:text-gray-400">
                Educacion
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
