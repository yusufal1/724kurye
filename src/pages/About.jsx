import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="my-10 md:w-2/3 flex flex-col items-center mx-auto">
          <h1 className="md:text-5xl text-2xl font-bold">Hakkımızda</h1>
          <p className="mt-10 md:text-base text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            doloribus, quam fugiat officiis reiciendis voluptatum. A excepturi
            ad officia voluptatibus nisi animi quos itaque, eius, tempora sit
            maiores accusamus deleniti error voluptatem, perferendis vero ea
            expedita praesentium pariatur illo provident! Dicta illum nemo aut
            nam quaerat quis consectetur excepturi illo, explicabo vero
            voluptates doloribus earum laudantium incidunt ut vitae voluptas,
            quia placeat. Ipsum delectus corporis eos laudantium commodi magni,
            asperiores impedit dicta, soluta atque eius cum ducimus neque
            dolorum molestias quam facere consequatur quis aliquid.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
