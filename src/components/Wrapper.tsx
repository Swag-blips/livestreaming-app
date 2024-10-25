import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";

interface Wrapper {
  children: React.ReactNode;
  enableRightbar: boolean;
}
const Wrapper = ({ children, enableRightbar }: Wrapper) => {
  const [openSidebar, setOpenSidebar] = useState<boolean | null>(null);
  return (
    <div>
      <Sidebar
        open={openSidebar}
        onClose={() => setOpenSidebar(!openSidebar)}
      />

      <main
        className={`pl-0 md:pl-[300px] ${
          enableRightbar ? "min-[1150px]:pr-[300px]" : ""
        }`}
      >
        <Navbar onMenuClick={() => setOpenSidebar(!openSidebar)} />
        <div className="px-4">{children}</div>
        {enableRightbar && <RightBar />}
      </main>
    </div>
  );
};

export default Wrapper;
