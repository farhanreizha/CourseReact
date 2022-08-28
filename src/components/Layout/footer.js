import { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <div className="flex justify-center items-center py-10 md:sticky">
        <span className="flex items-center gap-2">
          <span>
            &copy; CopyRight 2022{" "}
            <a
              href="https://github.com/farhanreizha"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600 hover:border-b border-blue-600"
            >
              Farhan Reizha
            </a>
            <span className="text-red-500"> &hearts;</span>
          </span>
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;
