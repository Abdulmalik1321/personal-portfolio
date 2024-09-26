export function Logo() {
  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <img
        className="size-6 lg:size-8 invert"
        src="https://cdn.icon-icons.com/icons2/2389/PNG/512/laravel_horizon_logo_icon_145119.png"
        alt="logo"
      />
      <h1 className="text-xl lg:text-3xl whitespace-nowrap">الأفق المتقدم</h1>
    </div>
  );
}

export function LoadingLogo() {
  return (
    <div className="flex items-center gap-3 lg:gap-5">
      <img
        className="size-7 lg:size-14 invert"
        src="https://cdn.icon-icons.com/icons2/2389/PNG/512/laravel_horizon_logo_icon_145119.png"
        alt="logo"
      />
      <h1 className="text-xl lg:text-5xl">الأفق المتقدم</h1>
    </div>
  );
}
