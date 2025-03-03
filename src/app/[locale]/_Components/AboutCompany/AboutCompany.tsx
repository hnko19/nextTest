import Image from "next/image";


import aboutComapany from "/public/images/aboutCompany.png";
import { getTranslations } from "next-intl/server";

export default async function AboutCompany() {
  const t = await getTranslations("AboutCompany");
  return <>
<div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div data-aos="zoom-in" className="md:6/12 lg:w-5/12">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3843.2288644973364!2d32.564359024111965!3d15.579416284198556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e910079ed877b%3A0xd5c5ec306dd4d62d!2z2LTYsdmD2Kkg2YXYt9in2LHYp9iqINin2YTYs9mI2K_Yp9mGINin2YTZhdit2K_ZiNiv2Kk!5e0!3m2!1sar!2s!4v1730793687789!5m2!1sar!2s"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
        <div  data-aos="zoom-in" className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{t('about')} </h2>
          <p className="mt-6 text-gray-600">{t('description1')}</p>
          <p className="mt-4 text-gray-600">{t('description2')} </p>
          <p className="mt-4 text-gray-600">{t('description3')}</p>
        </div>
      </div>
  </div>
</div>
  </>
}
