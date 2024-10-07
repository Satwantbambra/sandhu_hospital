import React, { useEffect } from "react";
import doc from "./images/doctor.webp";
import { FaRegCalendarDays } from "react-icons/fa6";
function Doctor() {
  const changeLastWord = () => {
    const elements = document.querySelectorAll(".sdoc-name");

    elements.forEach((element) => {
      const words = element.innerText.split(" ");
      if (words.length >= 1) {
        // Ensure there's at least one word
        words[words.length - 1] = `<span style="color:var(--pink)">${
          words[words.length - 1]
        }</span>`;
        element.innerHTML = words.join(" ");
      }
    });
  };

  // Execute the word change effect once the component is mounted
  useEffect(() => {
    changeLastWord();
  }, []);
  return (
    <div>
      <div className="container-fluid px-0 about space pb-0">
        <div className="container space ">
          <div className="row mt-lg-4 mt-3 px-3 ">
            <div className="col-lg-6">
              <div className="doc-s">
                <img src={doc} alt=" doctor name" />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="p-black-bold">Cardiologist </span>
              <h1 className="banner-black  sdoc-name">ARAV RAJ SHARMA</h1>
              <p className="sub-heading-black">With over 15 years of experience in Cardiologist </p>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">Qualifications</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-d">
                      <p className="p-white mb-0">MBBS</p>
                    </div>
                    <div className="d-d">
                      <p className="p-white mb-0">MD</p>
                    </div>
                    <div className="d-d">
                      <p className="p-white mb-0">DM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">Phone no.</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-d">
                    <a href="tel:9876543210" className="p-white">9876543210</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">Service</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-d">
                      <p className="p-white mb-0">DE-ADDICTION</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">About Doctor</div>
                  <p className="p-black mb-0">
                    Dr. Aarav raj Sharma is a highly skilled and compassionate
                    medical professional with extensive experience in
                    Cardiologist. Dedicated to patient care and well-being,
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-3">
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">More Info</div>
                  <p className="p-black mb-0">
                    Dr. Aarav raj Sharma is a highly skilled and compassionate
                    medical professional with extensive experience in
                    Cardiologist. Dedicated to patient care and well-being,
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquid aliquam consequuntur quis, ut accusamus laudantium
                    necessitatibus rerum eveniet quia sit debitis excepturi sed
                    aperiam quisquam animi. Recusandae facilis eos vero quod
                    sunt quidem sed earum distinctio in aspernatur saepe
                    consequatur quos ea, nam suscipit quia cumque atque. Culpa
                    sint adipisci doloremque reiciendis tempore ab laborum
                    distinctio oluptatum ea eius! Magni necessitatibus similique
                    perferendis dolore delectus aspernatur autem maxime
                    consequatur laborum tenetur maiores unde eum, impedit quam,
                    numquam aperiam dolores vel. Consectetur distinctio ipsam
                    dignissimos, tempore sunt vero odit nulla aliquam fuga non
                    minus expedita est quidem reprehenderit harum provident
                    repellendus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 row px-3">
            <div className="col-12">
              <h1 className="section-heading-black  ">Exepiernces</h1>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">
                    10 Years in Cardiology
                  </div>
                  <div className="d-flex my-1">
                  <FaRegCalendarDays className="me-2" />
                 <p className="p-black-bold mb-0">2014 – Present</p>
                  </div>
                  <p className="p-black mb-0">
                    Dr. Arav raj sharma has been a practicing cardiologist for over
                    a decade, specializing in interventional cardiology. His
                    career began after completing his fellowship at one of
                    India’s leading heart institutes. Over the years, he has
                    developed expertise in minimally invasive cardiac
                    procedures, particularly in angioplasty and stent placement.
                    His most notable achievement came in 2019, when he
                    successfully led a 20-member team in performing a complex
                    heart surgery for a patient suffering from multiple blocked
                    arteries, saving the patient’s life against tremendous odds.
                    Beyond surgery, Dr. Sharma is actively involved in
                    preventive cardiology and public health campaigns aimed at
                    reducing cardiovascular diseases through early diagnosis and
                    lifestyle interventions.
                  </p>
                </div>
              </div>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">
                    10 Years in Cardiology
                  </div>
                  <div className="d-flex my-1">
                  <FaRegCalendarDays className="me-2" />
                 <p className="p-black-bold mb-0">2014 – Present</p>
                  </div>
                  <p className="p-black mb-0">
                    Dr. Arav raj sharma has been a practicing cardiologist for over
                    a decade, specializing in interventional cardiology. His
                    career began after completing his fellowship at one of
                    India’s leading heart institutes. Over the years, he has
                    developed expertise in minimally invasive cardiac
                    procedures, particularly in angioplasty and stent placement.
                    His most notable achievement came in 2019, when he
                    successfully led a 20-member team in performing a complex
                    heart surgery for a patient suffering from multiple blocked
                    arteries, saving the patient’s life against tremendous odds.
                    Beyond surgery, Dr. Sharma is actively involved in
                    preventive cardiology and public health campaigns aimed at
                    reducing cardiovascular diseases through early diagnosis and
                    lifestyle interventions.
                  </p>
                </div>
              </div>
              <div className="d-contain">
                <div className="d-wrap">
                  <div className="dd-title p-heading-white">
                    10 Years in Cardiology
                  </div>
                  <div className="d-flex my-1">
                  <FaRegCalendarDays className="me-2" />
                 <p className="p-black-bold mb-0">2014 – Present</p>
                  </div>
                  <p className="p-black mb-0">
                    Dr. Arav raj sharma has been a practicing cardiologist for over
                    a decade, specializing in interventional cardiology. His
                    career began after completing his fellowship at one of
                    India’s leading heart institutes. Over the years, he has
                    developed expertise in minimally invasive cardiac
                    procedures, particularly in angioplasty and stent placement.
                    His most notable achievement came in 2019, when he
                    successfully led a 20-member team in performing a complex
                    heart surgery for a patient suffering from multiple blocked
                    arteries, saving the patient’s life against tremendous odds.
                    Beyond surgery, Dr. Sharma is actively involved in
                    preventive cardiology and public health campaigns aimed at
                    reducing cardiovascular diseases through early diagnosis and
                    lifestyle interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
