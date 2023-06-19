import Image from "next/image";
import Link from "next/link";
import React from "react";

const Avatar: React.FC = () => {
  return (
    <Link href={"/profile"}>
      <Image
        width={37}
        height={37}
        className="w-10 h-10 rounded-full"
        src="/avatar.png"
        alt="Rounded avatar"
      />
    </Link>
  );
};

export default Avatar;
