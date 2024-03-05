import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-layout grid h-[100vh] md:grid-cols-2 grid-cols-1">
      <div className="user-data">
        <Outlet />
      </div>
      <div className="auth-image md:flex w-full hidden items-end justify-center">
        <h2 className="mb-8 mx-2 text-2xl text-main font-semibold">
          <label>Discover the ancient Civilization</label>
        </h2>
      </div>
    </div>
  );
}
