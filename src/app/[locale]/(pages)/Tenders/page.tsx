import Tender from "@/app/[locale]/_Components/Tender/Tender";
import MainTitle from "@/app/[locale]/_Components/Title/MainTitle";
import { apiUrl } from "@/helpers/config";
import { TenderResponse , ITender } from "@/Interfaces/Tender";
import { getTranslations } from "next-intl/server";


export default async function Page({locale}: any) {
  
  const t = await getTranslations("Tender");

  let response: Response = await fetch(apiUrl +"Tenders");
  let { data }: TenderResponse = await response.json();
  let res :ITender[] = data;

  return<>
  <MainTitle title={t('title')} />
  <div className="py-20">
  {
    res.map((data: ITender , index: any)=>{
        return  <Tender tender={data} key={index} locale={locale}/>
      })
    
  }
    </div>
  </>
}
