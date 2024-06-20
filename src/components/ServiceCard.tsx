export function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-[90vw] md:w-[50vw] h-[50vh]">
      <div className="w-[90vw] md:w-[50vw] h-[50vh] relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
        <div className="w-full flex justify-center mb-5">
          <svg viewBox="0 0 256 256" className="size-32 md:size-44 fill-white">
            <g>
              <path d="M116.1,26.9h4.3v76.7c0,5.9,4.8,10.7,10.7,10.7H233c5.9,0,10.7-4.8,10.7-10.7V26.9h4.3c2.8,0,5-2.3,5-5s-2.3-5-5-5h-8.8   c-0.2,0-0.4-0.1-0.5-0.1c-0.2,0-0.4,0.1-0.5,0.1H126c-0.2,0-0.4-0.1-0.5-0.1c-0.2,0-0.4,0.1-0.5,0.1h-8.8c-2.8,0-5,2.3-5,5   S113.3,26.9,116.1,26.9z M233.7,103.6c0,0.4-0.3,0.7-0.7,0.7H131.1c-0.4,0-0.7-0.3-0.7-0.7V26.9h103.2V103.6z" />

              <path d="M243.7,206.3c-6.6-3.3-18.6-7.6-24.5-9.6v-0.2c3.1-2.8,5.3-6.4,6.6-10.4c3.2-1,5.9-3.4,7.3-6.6c0.9-1.8,1.4-3.8,1.4-5.8   c0-1.4-0.2-2.7-0.7-4c-0.4-1.6-1.2-3-2.3-4.1c1.2-7.2-0.6-14.5-5.1-20.2c-5.1-6.6-13-10.5-21.6-10.7c-0.4,0-0.8,0-1,0   c-0.4,0-0.8,0-1.3,0c-8.6,0.2-16.5,4.1-21.6,10.7c-4.5,5.8-6.3,13.1-5.1,20.2c-1.1,1.1-1.9,2.5-2.3,4.1c-0.5,1.3-0.7,2.6-0.7,4   c0,2,0.5,4,1.4,5.8c1.4,3.2,4.1,5.6,7.3,6.6c1.2,4,3.5,7.6,6.6,10.4v0.2c-5.2,1.8-15.3,5.4-22.3,8.6c-6.8-3.1-17-6.8-22.3-8.6v-0.2   c3.1-2.8,5.3-6.4,6.6-10.4c3.2-1,5.9-3.4,7.3-6.6c0.9-1.8,1.4-3.8,1.4-5.8c0-1.4-0.2-2.7-0.7-4c-0.4-1.6-1.2-3-2.3-4.1   c1.2-7.2-0.6-14.5-5.1-20.2c-5.1-6.6-13-10.5-21.6-10.7c-0.4,0-0.8,0-1,0c-0.4,0-0.8,0-1.3,0c-8.6,0.2-16.5,4.1-21.6,10.7   c-4.5,5.8-6.3,13.1-5.1,20.2c-1.1,1.1-1.9,2.5-2.3,4.1c-0.5,1.3-0.7,2.6-0.7,4c0,2,0.5,4,1.4,5.8c1.4,3.2,4.1,5.6,7.3,6.6   c1.2,4,3.5,7.6,6.6,10.4v0.2c-5.3,1.8-15.4,5.5-22.3,8.6c-6.8-3.1-17-6.8-22.3-8.6v-0.2c3.1-2.8,5.3-6.4,6.6-10.4   c3.2-1,5.9-3.4,7.3-6.6c0.9-1.8,1.4-3.8,1.4-5.8c0-1.4-0.2-2.7-0.7-4c-0.4-1.6-1.2-3-2.3-4.1c1.2-7.2-0.6-14.5-5.1-20.2   c-5.1-6.6-13-10.5-21.6-10.7c-0.4,0-0.8,0-1,0c-0.4,0-0.8,0-1.3,0c-8.6,0.2-16.5,4.1-21.6,10.7c-4.5,5.8-6.3,13.1-5.1,20.2   c-1.1,1.1-1.9,2.5-2.3,4.1c-0.5,1.3-0.7,2.6-0.7,4c0,2,0.5,4,1.4,5.8c1.4,3.2,4.1,5.6,7.3,6.6c1.2,4,3.5,7.6,6.6,10.4v0.2   c-5.9,2-17.9,6.4-24.5,9.6c-4,2-6.9,5.8-7.6,10.3c-1.5,8.8-1.8,23.1-1.8,23.7c0,2.8,2.2,5.1,5,5.1c0,0,0.1,0,0.1,0c2.7,0,5-2.2,5-5   c0-0.1,0.3-14.1,1.6-22.2c0.2-1.3,1-2.4,2.2-3c8.1-4,26.4-10.2,26.6-10.3c2.1-0.7,3.4-2.6,3.4-4.8v-6.2c0-1.6-0.7-3.1-2-4l-0.5-0.4   c-2.6-1.9-4.3-4.9-4.9-8.1l-0.1-0.7c-0.4-2.5-2.5-4.3-5-4.3h-0.5c-0.9,0-1.5-0.6-1.7-1.2c-0.1-0.2-0.2-0.4-0.3-0.5   c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.2,0-0.5,0.1-0.7c0-0.1,0.1-0.2,0.1-0.2l1-0.6c1.9-1.1,2.8-3.3,2.3-5.4l-0.4-1.9   c-1.1-4.7-0.1-9.5,2.9-13.3c3.2-4.2,8.3-6.6,13.9-6.8l1,0l0.8,0c5.6,0.1,10.6,2.6,13.9,6.8c3,3.8,4,8.5,2.9,13.3l-0.4,1.9   c-0.5,2.1,0.4,4.3,2.3,5.4l1,0.6c0,0.1,0.1,0.2,0.1,0.2c0.1,0.2,0.1,0.5,0.1,0.7c0,0.4-0.1,0.8-0.3,1.2c-0.1,0.2-0.2,0.4-0.3,0.5   c-0.2,0.5-0.8,1.2-1.7,1.2h-0.5c-2.5,0-4.6,1.8-5,4.3l-0.1,0.7c-0.5,3.2-2.3,6.2-4.8,8.1l-0.5,0.4c-1.3,1-2,2.4-2,4v6.2   c0,2.2,1.4,4.1,3.4,4.8c0.2,0.1,18.5,6.2,26.4,10.2c1.5,0.8,3.3,0.8,4.8,0.1c8.1-4,26.4-10.2,26.6-10.3c2.1-0.7,3.4-2.6,3.4-4.8   v-6.2c0-1.6-0.7-3.1-2-4l-0.5-0.4c-2.6-1.9-4.3-4.9-4.9-8.1l-0.1-0.7c-0.4-2.5-2.5-4.3-5-4.3h-0.5c-0.9,0-1.5-0.6-1.7-1.2   c-0.1-0.2-0.2-0.4-0.3-0.5c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.2,0-0.5,0.1-0.7c0-0.1,0.1-0.2,0.1-0.2l1-0.6c1.9-1.1,2.8-3.3,2.3-5.4   l-0.4-1.9c-1.1-4.7-0.1-9.5,2.9-13.3c3.2-4.2,8.3-6.6,13.9-6.8l1,0l0.8,0c5.6,0.1,10.6,2.6,13.9,6.8c3,3.8,4,8.5,2.9,13.3l-0.4,1.9   c-0.5,2.1,0.4,4.3,2.3,5.4l1,0.6c0,0.1,0.1,0.2,0.1,0.2c0.1,0.2,0.1,0.5,0.1,0.7c0,0.4-0.1,0.8-0.3,1.2c-0.1,0.2-0.2,0.3-0.3,0.5   c-0.2,0.5-0.8,1.2-1.7,1.2h-0.5c-2.5,0-4.6,1.8-5,4.3l-0.1,0.7c-0.5,3.2-2.3,6.2-4.9,8.1l-0.5,0.4c-1.3,1-2,2.4-2,4v6.2   c0,2.2,1.4,4.1,3.4,4.8c0.2,0.1,18.5,6.2,26.6,10.3c1.4,0.8,3.2,0.7,4.7,0c8.1-4,26.4-10.2,26.6-10.3c2.1-0.7,3.4-2.6,3.4-4.8v-6.2   c0-1.6-0.7-3.1-2-4l-0.5-0.4c-2.6-1.9-4.3-4.9-4.9-8.1l-0.1-0.7c-0.4-2.5-2.5-4.3-5-4.3h-0.5c-0.9,0-1.5-0.6-1.7-1.2   c-0.1-0.2-0.2-0.4-0.3-0.5c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.2,0-0.5,0.1-0.7c0-0.1,0.1-0.2,0.1-0.2l1-0.6c1.9-1.1,2.8-3.3,2.3-5.4   l-0.4-1.9c-1.1-4.7-0.1-9.5,2.9-13.3c3.2-4.2,8.3-6.6,13.9-6.8l1,0l0.8,0c5.6,0.1,10.6,2.6,13.9,6.8c3,3.8,4,8.5,2.9,13.3l-0.4,1.9   c-0.5,2.1,0.4,4.3,2.3,5.4l1,0.6c0,0.1,0.1,0.2,0.1,0.2c0.1,0.2,0.1,0.5,0.1,0.7c0,0.4-0.1,0.8-0.3,1.2c-0.1,0.2-0.2,0.4-0.3,0.5   c-0.2,0.5-0.8,1.2-1.7,1.2h-0.5c-2.5,0-4.6,1.8-5,4.3l-0.1,0.7c-0.5,3.2-2.3,6.2-4.8,8.1l-0.5,0.4c-1.3,1-2,2.4-2,4v6.2   c0,2.2,1.4,4.1,3.4,4.8c0.2,0.1,18.5,6.2,26.6,10.3c1.2,0.6,2,1.7,2.2,2.9c1.4,8.1,1.6,22,1.6,22.2c0.1,2.8,2.5,5,5.1,5   c2.8-0.1,5-2.3,5-5.1c0-0.6-0.3-14.9-1.8-23.7C250.6,212.2,247.7,208.3,243.7,206.3z" />

              <path d="M7.9,125.6c2.7,0.1,5.1-2.1,5.2-4.9c0.1-4.2,0.6-17.1,1.6-23c0.2-1.4,1.1-2.6,2.4-3.2c8.5-4.3,27.7-10.7,27.9-10.8   c2.1-0.7,3.4-2.6,3.4-4.8v-6.5c0-1.5-0.7-3-1.9-4l-0.6-0.5c-2.7-2.1-4.6-5.3-5.2-8.8l-0.1-0.7c-0.4-2.4-2.5-4.2-5-4.2h-0.5   c-1.1,0-1.8-0.7-2.1-1.4c-0.1-0.1-0.1-0.3-0.2-0.4c-0.2-0.4-0.3-0.9-0.3-1.4c0-0.3,0.1-0.6,0.2-0.9c0-0.1,0.1-0.2,0.1-0.3l1.1-0.6   c1.9-1.1,2.8-3.3,2.3-5.4L35.7,42c-1.2-5.1-0.1-10.1,3.1-14.1c3.4-4.4,8.8-7,14.6-7.2h2.1c5.9,0.1,11.3,2.7,14.7,7.1   c3.2,4.1,4.3,9.1,3.1,14.2l-0.4,1.9c-0.5,2.1,0.5,4.3,2.3,5.4l1,0.6c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.1,0.4,0.1,0.7   c0,0.5-0.1,1-0.3,1.3c-0.1,0.2-0.2,0.4-0.3,0.6c-0.3,0.8-1.1,1.4-2,1.4h-0.6c-2.6,0-4.7,1.9-5,4.5l0,0.5c-0.6,3.4-2.4,6.6-5.3,8.8   l-0.6,0.4c-1.2,1-1.9,2.4-1.9,4V79c0,2.2,1.4,4.1,3.4,4.8c0.2,0.1,19.4,6.5,27.9,10.8c1.3,0.6,2.2,1.8,2.4,3.2   c1,5.9,1.4,18.8,1.6,23c0.1,2.7,2.3,4.9,5,4.9c0.1,0,0.1,0,0.2,0c2.8-0.1,5-2.4,4.9-5.2c-0.3-7.7-0.7-18.5-1.7-24.3   c-0.7-4.6-3.7-8.5-7.8-10.6c-6.9-3.5-19.7-8-25.8-10.2v-0.5c3.2-2.9,5.6-6.7,6.9-10.9c3.4-1,6.2-3.5,7.6-6.8c1-1.8,1.5-3.9,1.5-6   c0-1.5-0.2-2.9-0.7-4.2c-0.4-1.6-1.2-3.1-2.4-4.2c1.3-7.5-0.6-15.2-5.3-21.2c-5.3-6.8-13.5-10.8-22.5-11h-2.3   c-8.9,0.2-17.1,4.3-22.4,11.1c-4.7,6-6.5,13.6-5.2,21.1c-1.2,1.2-2,2.6-2.5,4.2c-0.4,1.3-0.7,2.7-0.7,4.1c0,2.1,0.5,4.2,1.4,6   c1.5,3.3,4.3,5.8,7.7,6.8c1.3,4.2,3.7,8,6.9,10.9v0.5c-6.1,2.1-18.8,6.7-25.8,10.1c-4.1,2-7.1,6-7.9,10.5c-1,5.9-1.5,16.7-1.7,24.4   C2.9,123.2,5.1,125.5,7.9,125.6z" />
            </g>
          </svg>
        </div>
        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {title}
        </h1>

        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          {description}
        </p>

        {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
          Explore
        </button> */}
      </div>
    </div>
  );
}
