

const SideBar = () => {
  return (
    <div className="bg-gray-200 w-64 h-screen p-4">
      <h1 className="text-xl font-bold mb-4"></h1>
      <ul className="space-y-2">
        <li>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
            Admin
          </button>
        </li>
        <li>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md">
            User
          </button>
        </li>
        <li>
          <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md">
            Budget
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
