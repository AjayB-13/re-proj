


function Navbar({ cartCount, onCartClick }) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FakeStore</h1>
      <button
        className="bg-white text-blue-600 px-4 py-1 rounded font-semibold"
        onClick={onCartClick}
      >
        Cart ({cartCount})
      </button>
    </div>
  );
}

export default Navbar;