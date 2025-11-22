function Button({text, color, onClick}) {
  const colors = {
    blue: "bg-blue-200 hover:bg-blue-300",
    red:  "bg-red-500 hover:bg-red-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${colors[color]} cursor-pointer hover:text-white px-3 py-1 shadow inset-shadow-black rounded-lg ms-3 transition`}
    >
      {text}
    </button>
  );
}

export default Button;
