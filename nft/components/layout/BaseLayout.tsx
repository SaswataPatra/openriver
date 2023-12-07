import { FunctionComponent, ReactElement } from "react";
import { Navbar } from "../ui";

interface ChildrenProps {
  children: ReactElement | ReactElement[];
}

const BaseLayout: FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-16 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
