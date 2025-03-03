import { ITender } from "@/Interfaces/Tender";
import { dateSyntax } from "@/helpers/dateOperation";
import { useTranslations } from "next-intl";

export default function Tender({tender , locale} : {tender : ITender, locale: string}) {
    let startDate = dateSyntax(tender.StartDate);
    let endDate = dateSyntax(tender.EndDate);
    const t = useTranslations("Tender");
  return <>
  
<div className="container mx-auto border border-cyan-400 border-s-8 border-s-blue-500 mt-3">
<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
    <div className="flex-1 p-4 flex justify-start items-start flex-col md:ps-8">
        <div className="flex items-center justify-cente">
            <i className="fa fa-clock text-blue-300"></i>
            <div className="ms-1">
                <span>{ startDate }</span>
                {locale == "ar" ? 
                    <span className="mx-3"> <i className="fa fa-arrow-left"></i> </span> :
                    <span className="mx-3"> <i className="fa fa-arrow-right"></i> </span>
                }
                <span> {endDate} </span>
            </div>
        </div>
        <h2 className="text-3xl font-bold mt-1"> {locale == "ar" ? tender.Name.ar : tender.Name.en} </h2>
    </div>
    <div className="flex-1 p-4 text-white text-center">
        <a href={tender.FilePath ?? ""} target="_blank" className="px-4 py-2 bg-cyan-500 text-white cursor-pointer"> {t('download')} <i className="fa fa-download"></i></a>
     </div>
</div>
</div>

  </>
}
