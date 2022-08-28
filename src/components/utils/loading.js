import { FaCircle } from "react-icons/fa";

function Loading() {
  return (
    <div className="flex text-3xl justify-center my-4">
      <FaCircle className="animate-ping text-red-500" />
      <FaCircle className="animate-ping text-yellow-500" />
      <FaCircle className="animate-ping text-green-500" />
    </div>
  );
}

export default Loading;
