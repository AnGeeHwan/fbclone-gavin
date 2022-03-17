import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Input() {
  const { data: session } = useSession();

  return (
    <div>
      <div>
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
      </div>
    </div>
  );
}

export default Input;
