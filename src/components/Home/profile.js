import { FaInfoCircle } from "react-icons/fa";
import Card from "../utils/card";

function Profile() {
  return (
    <div className=" my-5">
      <Card
        header={
          <>
            <span className="flex items-center justify-center gap-2 text-xl">
              <FaInfoCircle /> Information
            </span>
            <hr className="my-2" />
          </>
        }
      >
        <p className="text-blue-100">
          Website ini dibuat ketika sedang mengikuti course ReactJS bang dea.
          Seperti biasa diakhir course bang dea selalu memberikan challenge atau
          tugas untuk bisa lebih memahami apa yang telah di ajarkannya. berikut
          list challenge atau tugas yang bang dea berikan :
        </p>
        <ul className="list-disc mx-5">
          <li>
            <span className="text-blue-100">
              Routing URL posts dengan isian component dari API Post
            </span>
          </li>
          <li>
            <span className="text-blue-100">Membuat UI Homepage</span>
          </li>
          <li>
            <span className="text-blue-100">Active Navigation Bar</span>
          </li>
          <li>
            <span className="text-blue-100">
              Ketika post title diklik munculkan popup detail dari API
            </span>
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default Profile;
