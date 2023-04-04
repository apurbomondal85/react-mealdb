import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p className="text-5xl font-bold my-4">404</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}