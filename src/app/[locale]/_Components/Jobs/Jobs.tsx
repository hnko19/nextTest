import { dateSyntax } from "@/helpers/dateOperation";
import { IJob } from "@/Interfaces/Jobs";
import { useTranslations } from "next-intl";

export default function Jobs({ data, locale }: { data: IJob, locale: string }) {
  const t = useTranslations("Jobs");
  let startDate = dateSyntax(data.StartDate);
  let endDate = dateSyntax(data.EndDate);
  return <>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-blue-100">
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {locale == "ar" ? data.Title.ar : data.Title.en }
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {locale == "ar" ? data.JopTypeName.ar : data.JopTypeName.en}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {startDate}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {endDate}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a  target="_blank" className="px-4 py-2 bg-cyan-500 text-white cursor-pointer"> {t('download')} <i className="fa fa-download"></i></a>
              </td>
            </tr>
  </>
}

