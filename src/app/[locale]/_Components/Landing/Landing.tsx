import Image from 'next/image';
import LandingImage from '../../../../../public/images/new.png';
// import LandingImage from '../public/images/new.png';
import Card from '../Weather/Card';
import { getTranslations } from 'next-intl/server';


export default async function Landing() {
  const t = await getTranslations("Landing");
  return (
    <>
      <section className="relative bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <Image
          src={LandingImage}
          alt="Landing background"
          layout="fill"
          objectFit="cover" // تعديل هنا
          quality={100}
          className="absolute top-0 w-full h-full"
        />

<span
  id="blackOverlay"
  className="w-full h-full absolute top-0 left-0 opacity-75 bg-black" // تعديل هنا
></span>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className='flex items-center justify-between lg:flex-row gap-y-4 flex-col'>
                <div className="w-full lg:w-6/12 px-4 rtl:ml-auto ltr:mr-auto text-right ltr:text-left">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-4xl">
                      {t("sacl")}
                    </h1>
                    <p className="mt-4 text-lg text-white">
                      {t('description')}
                    </p>
                  </div>
                </div>
                <div>
                  <Card />
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: `translateZ(0px)` }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section data-aos="fade-in" className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div data-aos="flip-right" className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold"> {t('goals')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {t('goalsDescription')}
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="flip-up" className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fa-solid fa-earth-africa"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{t('vision')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {t('visionDescription')}
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="flip-left" className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold"> {t('values')} </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    {t('valuesDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
