export function Logo() {
  return (
    <>
      <h1>test</h1>
    </>
  );
}

export function LoadingLogo() {
  return (
    <div className="flex items-center gap-5">
      <img
        className="size-24"
        src="https://vincentbean.com/assets/horizon.png"
        alt="logo"
      />
      <h1 className="text-5xl">Advanced Horizon</h1>
    </div>
  );
}
