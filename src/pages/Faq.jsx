import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Faq() {
  const faqData = [
    {
      question: "Nasıl bir kurye olabilirim?",
      answer:
        'Kurye olmak için öncelikle "Kurye Ol" sayfasından başvuruda bulunmanız gerekmektedir. Başvurunuz incelendikten sonra size geri dönüş yapılacaktır.',
    },
    {
      question: "Kurye olmak için hangi şartlar gereklidir?",
      answer:
        "Kurye olmak için 18 yaşını doldurmuş olmanız, ehliyetinizin olması, araba veya motosiklet kullanabiliyor olmanız gerekmektedir.",
    },
    {
      question: "Kurye hizmeti ne kadar sürede sağlanmaktadır?",
      answer:
        "Kurye hizmetimiz 7/24 kesintisiz olarak sunulmaktadır. Talep edilen hizmetin aciliyetine göre en kısa sürede bir kurye size yönlendirilir.",
    },
    {
      question: "Kurye ücretleri nasıl belirlenmektedir?",
      answer:
        "Kurye ücretleri teslimat mesafesine ve araç türüne göre belirlenmektedir.",
    },
    {
      question: "Nasıl bir ödeme yöntemi kullanabilirim?",
      answer:
        "Ödeme yöntemi olarak  kredi kartı ile online ödeme seçeneğimiz bulunmaktadır.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="md:w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-4 text-center">Sıkça Sorulan Sorular</h1>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                className="text-lg font-semibold mb-2 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
