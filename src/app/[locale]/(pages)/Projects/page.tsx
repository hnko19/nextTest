"use client";
import { apiUrl } from "@/helpers/config";
import { IProject } from "@/Interfaces/Project";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// إعدادات السلايدر
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  
};

export default function Page ()  {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const t = useTranslations("Projects");
  const locale = useLocale();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(apiUrl+"projects"); // استبدل برابط API الفعلي
        const data = await response.json();

        // التأكد من أن البيانات تحتوي على مصفوفة المشاريع داخل `data`
        if (data && Array.isArray(data.data)) {
          setProjects(data.data);
        } else {
          console.error("Expected an array but received:", data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleToggle = (id: number): void => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div key={project.Id} className="container mx-auto my-5" dir="rtl">
            <div
              className={`relative rounded-lg flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center md:shadow-xl mx-2`}
            >
              {/* الصورة مع السلايدر */}
              <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 overflow-hidden rounded-lg">
                <Slider {...sliderSettings}>
                  {project.ProjectImages && project.ProjectImages.length > 0 ? (
                    project.ProjectImages.map((image: string, imgIndex: number) => (
                      <div key={imgIndex} className="w-full h-80">
                        <img
                          src={image}
                          alt={`Project ${project.Id} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="w-full h-80 flex items-center justify-center bg-gray-200">
                      <img
                        src={project.CoverImage}
                        alt={`Project ${project.Id}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  )}
                </Slider>
              </div>

              {/* النص */}
              <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center">
                <div className="p-6 bg-white w-full">
                  <h3 className="font-bold text-2xl text-gray-700 mb-4">{ locale == "ar" ? project.Title.ar : project.Title.en }</h3>
                  <p
                    className={`text-gray-600 text-justify overflow-hidden transition-all duration-300 ${
                      expandedSections[project.Id] ? "max-h-96" : "max-h-20"
                    }`}
                  >
                    {locale == "ar" ? project.Description.ar : project.Description.en }
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleToggle(project.Id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      {expandedSections[project.Id] ? (
                        <>
                           {t('readLess')} <i className="fa-solid fa-angle-up"></i>
                        </>
                      ) : (
                        <>
                            {t('readMore')} <i className="fa-solid fa-angle-down"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">جاري تحميل البيانات...</p>
      )}
    </>
  );
};

