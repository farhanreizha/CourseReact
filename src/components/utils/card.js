function Card({ header, children, footer }) {
  return (
    <>
      <div className="flex bg-blue-500 max-w-3xl mx-auto text-white rounded-md">
        <div className="p-5">
          {header}
          <div className="flex flex-col mx-5 md:mx-10 gap-2">{children}</div>
          {footer}
        </div>
      </div>
    </>
  );
}

export default Card;
