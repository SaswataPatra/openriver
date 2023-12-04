import { FunctionComponent, ReactElement } from "react";
import Navbar from "../navbar";
interface ChildrenProps {
  children: ReactElement | ReactElement[];
}

const BaseLayout: FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-200 overflow-hidden min-h-screen">
        <div className="max-w-7xl px-8 sm:px-8 lg:px-8">{children}</div>
      </div>
    </>
  );
};

export default BaseLayout;
