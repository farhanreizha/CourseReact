import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../utils/loading";
import Button from "../utils/button";
import Modal from "../utils/modal";
import { Dialog } from "@headlessui/react";

function DetailPosts() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let flush = false;
    if (flush === false) {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`)
        .then((result) => setPosts(result.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
    return () => (flush = true);
  }, [limit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => (prev === 1 ? 1 : prev - 1));
  };

  if (loading) return <Loading />;
  if (!posts) return <div>404 Not Found</div>;
  return (
    <Fragment>
      <div className="my-5">
        <div className=" flex flex-col gap-1">
          {posts.map((post, i) => (
            <div key={i}>
              <Modal
                activator={({ setIsOpen }) => (
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="text-sm font-medium text-left hover:text-blue-500"
                  >
                    {post.title}
                  </Button>
                )}
              >
                <div className="flex flex-col">
                  <strong>Post ID : {post.id}</strong>
                  <div className="flex gap-1">
                    <strong>User ID</strong>: {post.userId}
                  </div>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Title : {post.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Body : {post.body}</p>
                </div>
              </Modal>
            </div>
          ))}
        </div>
        <div className="flex pt-5 gap-1">
          <Button
            className="rounded-l-md bg-blue-500 hover:bg-blue-700 text-white px-10 py-1"
            onClick={() => handleLimit("-")}
          >
            -
          </Button>
          <Button
            className="rounded-r-md bg-blue-500 hover:bg-blue-700 text-white px-10 py-1"
            onClick={() => handleLimit("+")}
          >
            +
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailPosts;
