import React from "react";
import { Podcast } from "lucide-react";

interface Logo {
  className?: string;
  onlyLogo?: boolean;
}
const Logo = ({ className, onlyLogo }: Logo) => {
  return (
    <div
      className={`flex items-center gap-2 text-3xl text-white font-bold ${
        className ? className : ""
      }`}
    >
      <Podcast className="size-7 text-primary" />
      {!onlyLogo && (
        <h1>
          Stream <span className="text-primary">It</span>
        </h1>
      )}
    </div>
  );
};

export default Logo;
