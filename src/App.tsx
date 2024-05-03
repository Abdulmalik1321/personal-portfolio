import "./App.css";

function App() {
  console.log("app reloading");

  setTimeout(() => {
    const loading = document.getElementById("loading") as HTMLDivElement;
    const test = document.getElementById("test") as HTMLDivElement;
    loading.children[0].children[0].classList.add("loading-active");
    setTimeout(() => {
      loading.classList.add("loading__off");
      setTimeout(() => {
        test.classList.add("test-in");
        setTimeout(() => {
          test.classList.add("test-up");
        }, 50);
      }, 100);
      setTimeout(() => {
        loading.style.display = "none";
      }, 500);
    }, 500);
  }, 100);

  return (
    <>
      <div id="loading" className="loading">
        <span className="loading__span">
          <span className="loading__span--inner"></span>
        </span>
      </div>

      <div id="test" className="test">
        <h3 className="text-3xl underline bg-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          autem non voluptatem facilis vero beatae dignissimos pariatur nemo
          quos itaque eaque quasi blanditiis dolorem, accusamus sapiente et
          animi expedita explicabo!
        </h3>
      </div>
    </>
  );
}

export default App;
