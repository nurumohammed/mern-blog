const SideBar = () => {
  return (
    <div className=" p-2 m-2  bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200/30 rounded-md text-white">
      <div className="flex flex-col gap-4  ">
        <button className="px-2 py-2 text-xl bg-gradient-to-r from-green-500 via-indigo-700 to-pink-500 rounded-md text-white">
          Administrator
        </button>
        <button className="px-2 py-2 text-xl bg-gradient-to-r from-green-500 via-indigo-700 to-pink-500 rounded-md text-white">
          Administrator
        </button>
        <button className="px-2 py-2 text-xl bg-gradient-to-r from-green-500 via-indigo-700 to-pink-500 rounded-md text-white">
          Administrator
        </button>
      </div>
    </div>
  );
};

export default SideBar;
