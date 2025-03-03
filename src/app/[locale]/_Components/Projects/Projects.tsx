import { apiUrl, imageServerUrl } from "@/helpers/config";
import { IProject, ProjectResponse } from "@/Interfaces/Project";
import { getTranslations } from "next-intl/server";

export default async function Projects( {locale}: {locale: string} ) {

  const t = await getTranslations("Projects");

  const response: Response = await fetch(`${apiUrl}projects?limit=6`);
  const res: ProjectResponse = await response.json();

  
  return <>


<div className="flex justify-center items-center lg:py-20">
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div role="main" className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">  {t('title')}  </h1>
      <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12 hidden">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
    </div>
    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2 me-2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div data-aos="zoom-in-up" className="sm:w-1/2 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(res.data[0].StartDate).toLocaleDateString("ar-EG")}</p>
              <div className="absolute bottom-0 right-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{locale == "ar" ? res.data[0].Title.ar : res.data[0].Title.en}</h2>
                <p className="text-base leading-4 text-white mt-2"> الشركة المنفذة :{locale == "ar" ? res.data[0].ExecutorAr : res.data[0].ExecutorEng }</p>
                <a href="" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none me-3"> قراءة المزيد </p>
                  <i className="fa-solid fa-angle-left"></i>
                </a>
              </div>
            </div>
            <img src={imageServerUrl + res.data[0].CoverImage} className="w-full h-full object-cover" alt="chair" />
          </div>
          <div data-aos="zoom-in-down"  className="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(res.data[1].StartDate).toLocaleDateString("ar-EG")}</p>
              <div className="absolute bottom-0 right-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{locale == "ar" ? res.data[1].Title.ar : res.data[1].Title.en}</h2>
                <p className="text-base leading-4 text-white mt-2">الشركة المنفذة :{locale == "ar" ? res.data[1].ExecutorAr : res.data[1].ExecutorEng }  </p>
                <a href="" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none me-3"> قراءة المزيد </p>
                  <i className="fa-solid fa-angle-left"></i>
                </a>
              </div>
            </div>
            <img src={imageServerUrl + res.data[1].CoverImage} className="w-full h-full object-cover" alt="wall design" />
          </div>
        </div>
        <div data-aos="zoom-in-right"  className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"> {new Date(res.data[2].StartDate).toLocaleDateString("ar-EG")} </p>
            <div className="absolute bottom-0 right-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">{locale == "ar" ? res.data[2].Title.ar : res.data[2].Title.en}</h2>
              <p className="text-base leading-4 text-white mt-2">الشركة المنفذة :{locale == "ar" ? res.data[2].ExecutorAr : res.data[2].ExecutorEng}</p>
              <a href="" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none me-3"> قراءة المزيد </p>
                <i className="fa-solid fa-angle-left"></i>
              </a>
            </div>
          </div>
          <img src={imageServerUrl + res.data[2].CoverImage} alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
          <img className="w-full mt-4 sm:hidden" src={imageServerUrl + res.data[2].CoverImage} alt="sitting place" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div data-aos="zoom-in-left" className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(res.data[3].StartDate).toLocaleDateString("ar-EG")}</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">{locale == "ar" ? res.data[3].Title.ar : res.data[3].Title.en}</h2>
              <p className="text-base leading-4 text-white mt-2">الشركة المنفذة :{locale == "ar" ? res.data[3].ExecutorAr : res.data[3].ExecutorEng }</p>
              <a href="" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none me-3"> قراءة المزيد </p>
                <i className="fa-solid fa-angle-left"></i>
              </a>
            </div>
          </div>
          <img src={imageServerUrl + res.data[3].CoverImage } alt="sitting place" className="w-full h-full object-cover sm:block hidden" />
          <img className="sm:hidden w-full h-full object-cover" src={imageServerUrl + res.data[3].CoverImage } alt="sitting place" />
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div data-aos="zoom-in-up" className="relative w-full">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(res.data[4].StartDate).toLocaleDateString("ar-EG")}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{locale == "ar" ? res.data[4].Title.ar : res.data[4].Title.en}</h2>
                <p className="text-base leading-4 text-white mt-2">الشركة المنفذة :{locale == "ar" ? res.data[4].ExecutorAr : res.data[4].ExecutorEng }</p>
                <a href="" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none me-3"> قراءة المزيد </p>
                  <i className="fa-solid fa-angle-left"></i>
                </a>
              </div>
            </div>
            <img src={imageServerUrl + res.data[4].CoverImage} className="w-full h-full object-cover" alt="chair" />
          </div>
          <div data-aos="zoom-in-down" className="relative w-full sm:mt-0 mt-4">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(res.data[5].StartDate).toLocaleDateString("ar-EG")}</p>
              <div className="absolute bottom-0 right-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{locale == "ar" ? res.data[5].Title.ar : res.data[5].Title.en}</h2>
                <p className="text-base leading-4 text-white mt-2">الشركة المنفذة :{locale == "ar" ? res.data[5].ExecutorAr : res.data[5].ExecutorEng}</p>
                <a href="" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none me-3"> قراءة المزيد </p>
                  <i className="fa-solid fa-angle-left"></i>
                </a>
              </div>
            </div>
            <img src={imageServerUrl + res.data[5].CoverImage} className="w-full" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
}
