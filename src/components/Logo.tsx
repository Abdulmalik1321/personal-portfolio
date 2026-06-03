export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* <span className="flex size-9 items-center justify-center rounded-lg bg-white font-bold text-lg text-[#191825] lg:size-10 lg:text-xl">
        AA
      </span> */}
      <span className="hidden text-lg font-semibold tracking-tight text-white sm:inline lg:text-xl">
        Abdulmalik Almasud
      </span>
    </div>
  );
}

export function LoadingLogo() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-12 items-center justify-center rounded-xl bg-white font-bold text-2xl text-[#191825] lg:size-16 lg:text-4xl">
        AA
      </span>
      <span className="text-2xl font-semibold text-white lg:text-4xl">
        Abdulmalik Almasud
      </span>
    </div>
  );
}
