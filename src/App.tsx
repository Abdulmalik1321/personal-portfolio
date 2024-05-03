import "./App.css";

function App() {
  console.log("app reloading");

  // window.scrollTop = 1000;

  const scroll = () => {
    const html = document.getElementById("html") as HTMLHtmlElement;
    const position = html.scrollTop / html.scrollHeight;

    const innerSideBar = document.getElementById(
      "inner-side-bar"
    ) as HTMLDivElement;
    innerSideBar.style.height = `${position * 100}vh`;

    const icon2 = document.getElementById("icon2") as HTMLDivElement;
    const icon3 = document.getElementById("icon3") as HTMLDivElement;
    const icon4 = document.getElementById("icon4") as HTMLDivElement;
    const icon5 = document.getElementById("icon5") as HTMLDivElement;

    if (position * 100 < 17) {
      icon2.classList.remove("icon-color");
      icon3.classList.remove("icon-color");
      icon4.classList.remove("icon-color");
      icon5.classList.remove("icon-color");
    } else if (position * 100 > 17 && position * 100 < 37) {
      icon2.classList.add("icon-color");
      icon3.classList.remove("icon-color");
      icon4.classList.remove("icon-color");
      icon5.classList.remove("icon-color");
    } else if (position * 100 > 37 && position * 100 < 57) {
      icon2.classList.add("icon-color");
      icon3.classList.add("icon-color");
      icon4.classList.remove("icon-color");
      icon5.classList.remove("icon-color");
    } else if (position * 100 > 57 && position * 100 < 77) {
      icon2.classList.add("icon-color");
      icon3.classList.add("icon-color");
      icon4.classList.add("icon-color");
      icon5.classList.remove("icon-color");
    } else if (position * 100 > 77 && position * 100 < 83) {
      icon2.classList.add("icon-color");
      icon3.classList.add("icon-color");
      icon4.classList.add("icon-color");
      icon5.classList.add("icon-color");
    }
  };

  const poup = (n: number) => {
    const modal = document.getElementById("myModal") as HTMLDivElement;

    const img = document.getElementById(`myImg${n}`) as HTMLImageElement;
    const modalImg = document.getElementById("img01") as HTMLImageElement;
    modal.style.display = "block";
    modalImg.src = img.src;
    //captionText.innerHTML = img.alt;
    const span = document.getElementsByClassName("close")[0] as HTMLSpanElement;
    span.onclick = function () {
      modal.style.display = "none";
    };
  };

  return (
    <div>
      <div className="down-arrow"></div>
      <div className="side-bar">
        <div id="inner-side-bar" className="inner-side-bar">
          <img className="icon1 icon-color" src="user.png" alt="" />
          <img id="icon2" className="icon2" src="EXPERIENCE.png" alt="" />
          <img id="icon3" className="icon3" src="timeline.png" alt="" />
          <img id="icon4" className="icon4" src="skills.png" alt="" />
          <img id="icon5" className="icon5" src="contact-mail.png" alt="" />
        </div>
      </div>
      <section className="aboutMe">
        <a className="language" href="https://abdulmalik.in/ar/">
          <div>
            <img src="language.png" alt="" />
            للعربية
          </div>
        </a>
        <div className="inner-aboutMe">
          <div className="aboutWrap">
            <h1 className="about">ABOUT ME</h1>
            <h1 className="aboutOutLine">ABOUT</h1>
          </div>
          <div className="image-frame">
            <img src="imag-clear.png" alt="" />
          </div>
          <div className="aboutMe-text-wrap">
            <p style={{ fontSize: "50px" }}>
              I'm Abdulmalik Almasud, I hold a Bachelor's degree in Accounting
              and I'm a self-taught programmer in python, JavaScript, PHP and
              now I am exploring RUST as a low-level language. Ever since I
              finished university, I have been passionate about expanding my
              knowledge and skills in both fields. My unique combination of
              expertise enables me to approach problems with a creative and
              analytical mindset. I always look for new challenges and
              opportunities to grow and learn, and I am eager to see where my
              journey will take me.{" "}
              <a href="Abdulmalik_Almasud_Resume_E.pdf" download>
                Download CV
              </a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="accomplishments-wrap">
          <h1 className="accomplishments">EXPERIENCE</h1>
        </div>
        <div className="experience">
          <div style={{ width: "60%" }} className="E-accountant">
            <div>
              <h1>Accounting Experience</h1>
            </div>
            <div className="flex">
              <ul style={{ width: "65%" }}>
                <h3>General Accountant</h3>
                <h5>Mayyar United Catering co</h5>
                <li>Made daily entries of supplier and petty cash invoices.</li>
                <li>
                  Reconciled and matched all suppliers accounts for the 2021
                  year-end closing.
                </li>
                <li>
                  Communicated with suppliers to reconcile invoice payments.
                </li>
                <li>
                  Analyzed and verified employee expense reports for accuracy.
                </li>
                <li>
                  Processed payroll by validating work hours and attendance of
                  employees.
                </li>
                <li>
                  I was in charge of the company’s primary bank account and
                  handled payments to suppliers and salaries.
                </li>
                <li>
                  Worked at the main warehouse of the company to supervise
                  workers and prepare daily reports to headquarters about
                  receiving and dispatching of all the materials.
                </li>
                <li>
                  reviewed and validated all the company assets to be
                  transferred to new ERP system
                </li>
                <br />
              </ul>
              <ul style={{ width: "35%" }}>
                <h3>Coop Training</h3>
                <h5>Alsaleh & Alzoman CPA</h5>
                <li>Assisted auditors on daily tasks.</li>
                <li>
                  Helped on the translation of financial statements from Arabic
                  to English.
                </li>
                <li>
                  reviewed financial statements after the auditors to check for
                  mistakes or errors.
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ width: "30%" }}
            className="E-accountant ios-E-accountant"
          >
            <span></span>
            <div>
              <h1>Programming Experience</h1>
            </div>
            <div className="flex">
              <ul className="ios-ul">
                <br />
                <br />
                <li>
                  Created a python program to streamline data entry and
                  eliminate repetitive tasks at Mayyar United.
                </li>
                <li>
                  designed and developed{" "}
                  <a target="_blank" href="https://pcmod-sa.com/">
                    PC MOD
                  </a>
                  , which is a dropshipping e-commerce site that specializes in
                  electronics for Smart Development EST
                </li>
                <li>
                  Created a web-scraping script to scrap electronics prices from
                  top online stores
                </li>
                <li>Created many small projects in python and JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#282c34" }}>
        <div className="accomplishments-wrap">
          <h1 className="accomplishments">TIME LINE</h1>
        </div>
        <div className="time-line-section">
          <div className="time-line">
            <div className="time">
              <div>
                <span></span>12/12/2021
              </div>
              started working as an Accountant at Mayar Unaited
            </div>
            <div className="time">
              <div>
                <span></span>01/01/2022 → 30/03/2022
              </div>
              I worked with the suppliers team to reconcile and settle the
              accounts of all suppliers in order to close the financial year
              2021
            </div>
            <div className="time">
              <div>
                <span></span>01/04/2022 → 30/06/2022
              </div>
              recordied supplier invoices and petty cash transactions on a daily
              basis, as well as managing the company’s bank account by
              transferring money to suppliers
            </div>
          </div>
          <div className="time-line-2"></div>
          <div className="time-line-3">
            <div className="time">
              <div>
                <span></span>01/07/2022 → 30/08/2022
              </div>
              I was relocated to the company’s main warehouse to train workers,
              monitor inventory levels, and submit daily reports to
              headquarters. Additionally, I was recording supplier invoices on a
              daily basis
            </div>
            <div className="time">
              <div>
                <span></span>01/09/2022 → 12/12/2022
              </div>
              relocated back to the company’s headquarters and with my manager’s
              approval, I created a program to streamline data entry and
              eliminate repetitive tasks. This allowed my colleagues in
              accounting to work four times faster and more efficiently
            </div>
          </div>
          <div className="time-line-4"></div>
          <div className="time-line-5">
            <div className="time">
              <div>
                <span></span>01/01/2023 → 30/04/2023
              </div>
              After leaving Mayyar United, I designed and developed{" "}
              <a target="_blank" href="https://pcmod-sa.com/">
                PC MOD
              </a>
              , which is a dropshipping e-commerce site that specializes in
              electronics for Smart Development EST. I also programmed a Python
              script that automatically update all product prices on a daily
              basis. This script ensured that the prices matched the best online
              stores in the industry, providing customers with the best possible
              value.
            </div>
            <div className="time">
              <div>
                <span></span>01/05/2023 → Today
              </div>
              Studing quantum information and computing bootcamp at Tuwaiq
              Academy
            </div>
          </div>
          <div className="time-line-6">
            <div className="right-arrow"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="skills-title-wrap">
          <h1>SKILLS</h1>
        </div>
        <div>
          <div className="skills">
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{ fontSize: "2vw" }}>Accounting</h1>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <p>Attention to Details</p>
                  <p>Critical thinking</p>
                  <p>Data Analysis</p>
                  <p>Statements Analysis</p>
                </div>
                <div>
                  <p>Account reconciliation</p>
                  <p>Payroll Processing</p>
                  <p>Data Entry</p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{ fontSize: "2vw" }}>Programming</h1>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <p>Python</p>
                  <p>JavaScript</p>
                  <p>Automation</p>
                  <p>Problem Solving</p>
                </div>
                <div>
                  <p>PHP</p>
                  <p>CSS</p>
                  <p>HTML</p>
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className="languages">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{ fontSize: "2vw" }}>Languages</h1>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <p>Arabic: Native</p>
                  <p>English: Upper Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-title-wrap">
          <h1>CERTIFICATES</h1>
        </div>
        <div className="scrollport">
          <div>
            <img
              className="myImg"
              id="myImg6"
              onClick={() => poup(6)}
              src="Quantum.png"
              alt=""
            />
            <p>Information science and quantum/ computing</p>
          </div>
          <div>
            <img
              className="myImg"
              id="myImg0"
              onClick={() => poup(0)}
              src="TSF.png"
              alt=""
            />
            <p>Google Technical Support Fundamentals</p>
          </div>
          <div>
            <img
              className="myImg"
              id="myImg1"
              onClick={() => poup(1)}
              src="at.png"
              alt=""
            />
            <p>Qualification Course for CAT Exam</p>
          </div>
          <div>
            <img
              className="myImg"
              id="myImg2"
              onClick={() => poup(2)}
              src="CME.png"
              alt=""
            />
            <p>Capital Market Exam CME-1 Course</p>
          </div>
          <div>
            <img
              className="myImg"
              id="myImg3"
              onClick={() => poup(3)}
              src="FPB.png"
              alt=""
            />
            <p>Financial Planning & Budgeting Course</p>
          </div>
          <div>
            <img
              className="myImg"
              id="myImg5"
              onClick={() => poup(5)}
              src="STEP.png"
              alt=""
            />
            <p>STEP</p>
          </div>
          <div>
            <img
              className="myImg"
              id="myImg4"
              onClick={() => poup(4)}
              src="SMACC.png"
              alt=""
            />
            <p>SMACC Cloud Course</p>
          </div>
        </div>
        <div id="myModal" className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id="img01" />
          <div id="caption"></div>
        </div>
      </section>
      <section className="contact1">
        <div>
          <form action="mail.php" method="post">
            <h3 style={{ marginBottom: "1vh" }}>Get in touch</h3>
            <div>
              <input placeholder="Name" name="name" type="text" />
              <input
                style={{ marginLeft: "1vh" }}
                placeholder="Email"
                name="email"
                type="text"
              />
            </div>
            <div>
              <textarea
                className="message"
                placeholder="Message"
                name="message"
                id=""
                rows={10}
                cols={50}
              ></textarea>
            </div>
            <input style={{ borderRadius: "5px" }} type="submit" />
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact info</h3>
          <div>
            <img src="address.png" alt="" />
            <p>
              <b>Address: </b>Riyadh
            </p>
          </div>
          <div>
            <img src="whatsapp.png" alt="" />
            <p>
              <b>Phone: </b>
              <a href="https://api.whatsapp.com/send?phone=966538495575">
                0538495575
              </a>
            </p>
          </div>
          <div>
            <img src="mail.png" alt="" />
            <p>
              <b>Email: </b>mlk1321.aa@gmail.com
            </p>
          </div>
          <div>
            <img src="site.png" alt="" />
            <p>
              <b>Personal Page: </b>
              <a href="https://abdulmalik.in/">abdulmalik.in</a>
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}

export default App;
