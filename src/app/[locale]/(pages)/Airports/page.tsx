import { apiUrl } from "@/helpers/config";
import { AirportResponse, IAirport } from "@/Interfaces/Airport";
import Card from '../../_Components/Airports/Card';
import MainTitle from "@/app/[locale]/_Components/Title/MainTitle";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";

export default async function page( params : any) {
  const{locale} = params;
  const t = await getTranslations("Airports");
  let response: Response = await fetch(apiUrl + "Airports");
  let { data }: AirportResponse = await response.json();
  let res :IAirport[] = data;
  return <>
<MainTitle title={t('title')} />
<div className="flex justify-center items-stretch gap-4 py-16 flex-wrap">
{
  res.map((airport: IAirport , index: number)=>{
    return  <Card airport={airport} key={index} locale={locale}/>
  })
}
</div>




  </>
}
