import React from 'react';
import { Link, Outlet } from 'umi';

export default function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
