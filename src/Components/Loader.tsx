const Loader = () => {
  return (
    <div
      className={
        'flex items-center w-[100vw] h-[100vh] bg-gradient-to-r from-green-400 to-blue-500 justify-center'
      }
    >
      <div className="w-12 h-12 border-4 border-white border-b-transparent rounded-full inline-block animate-spin"></div>
    </div>
  );
};

export default Loader;
