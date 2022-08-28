import Images from "./images";

function Albums({ title, description }) {
  return (
    <>
      <div className="px-5 md:max-w-7xl mx-auto pt-20">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h2 className="text-xl font-normal">{description}</h2>
        <Images />
      </div>
    </>
  );
}

export default Albums;
