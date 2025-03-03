import Jobs from "@/app/[locale]/_Components/Jobs/Jobs";
import NoDataFound from "@/app/[locale]/_Components/NoDataFound/NoDataFound";
import MainTitle from "@/app/[locale]/_Components/Title/MainTitle";
import { apiUrl } from "@/helpers/config";
import { Locale } from "@/i18n/routing";
import { IJob, JobResponse } from "@/Interfaces/Jobs";
import { getTranslations } from "next-intl/server";

export default async function Page( params : any) {
  
  const {locale} = params;
  const t = await getTranslations("Jobs");
  let response: Response;

  try {
    response = await fetch(apiUrl + "JobCareers");
    
    // التأكد من استجابة الـ fetch بنجاح
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    let { data }: JobResponse = await response.json();

    // التأكد من وجود البيانات قبل محاولة الوصول إليها
    if (data) {
      let res: IJob[] = data;

      return (
        <>
          <MainTitle title={t('title')}/>
          <div className="py-20">
          <div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-300 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right ltr:text-left">
                {t('jobTitle')}
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right ltr:text-left">
                {t('employmentType')} 
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right ltr:text-left">
                {t('startDate')}
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right ltr:text-left">
                {t('endDate')}
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right ltr:text-left">
                {t('download')} 
              </th>
            </tr>
          </thead>
          <tbody>
          {res?.length > 0 ? (
              res.map((data: IJob, index: number) => (
                <Jobs data={data} key={index} locale={locale}/>
              ))
            ) : (
              <NoDataFound />
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
            
          </div>
        </>
      );
    } else {
      return (
        <>
          <MainTitle title={t('title')} />
          <NoDataFound />
        </>
      );
    }
  } catch (error) {
    console.error('Fetch error:', error);

    return (
      <>
        <MainTitle title={t('title')} />
        <NoDataFound />
      </>
    );
  }
}
