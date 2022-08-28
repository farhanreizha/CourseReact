function Button({ children, className, onClick }) {
  return (
    <button
      className={`${className} transition-all ease-in-out duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
