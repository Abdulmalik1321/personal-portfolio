export function ServiceCard() {
  return (
    <div className="w-96">
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-fit overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Meteors because they&apos;re cool
        </h1>

        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          I don&apos;t know what to write so I&apos;ll just paste something cool
        </p>

        <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
          Explore
        </button>
      </div>
    </div>
  );
}
