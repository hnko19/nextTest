import { imageServerUrl } from "@/helpers/config";
import { INews } from "@/Interfaces/News";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Card( {data, locale } : {data:INews , locale: any}  ) {
  const t = await getTranslations("News");
  return <>
  <div  className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <Image src={imageServerUrl + data.CoverImage} alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-cyan-900">{locale == "ar" ? data.Title.ar : data.Title.en}</h4>
                  <p className="text-gray-600">
                    {locale == "ar"
                      ? (data.Description.ar.length > 180 ? data.Description.ar.slice(0, 180).trim() + "..." : data.Description.ar)
                      : (data.Description.en.length > 180 ? data.Description.en.slice(0, 180).trim() + "..." : data.Description.en)
                    }
                  </p>

                </div>
                <Link href={`/${locale}/News?newsId=${data.Id}`} className="block w-max text-cyan-600"> {t('readMore')} </Link>
              </div>
            </div>
          </div>
  </>
}
