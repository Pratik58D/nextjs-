import Link from "next/link";
import React from "react";

const user = () => {
  return (
    <div>
      <h1>Dashboard User</h1>
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/user/1">Pratik</Link>
        </li>
        <li>
          <Link href="/dashboard/user/2">nabim</Link>
        </li>
        <li>
          <Link href="/dashboard/user/3">sita</Link>
        </li>
        <li>
          <Link href="/dashboard/user/4">kashiram devkota</Link>
        </li>
      </ul>
      <li></li>
    </div>
  );
};

export default user;
