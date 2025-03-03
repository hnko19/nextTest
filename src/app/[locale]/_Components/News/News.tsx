
import Image from 'next/image';
import { apiUrl, imageServerUrl } from '../../../../helpers/config'; 

import { INews } from '../../../../Interfaces/News';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Card from './Card';


export default async function News({ locale }: { locale: string }) {
    const t = await getTranslations("News")
    
    let newsApi = apiUrl + "news";
    let response: any = await fetch(`${newsApi}?` + {
      "limit" : 6
    });
    
    response = await response.json();

    
    return <>
  
  <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl"> {t('lastNews')}  </h2>
      </div>

      <div data-aos="zoom-in-left" className=" grid gap-10 lg:grid-cols-2">
      {
        // "
        response.data.map((data: INews , index: number)=>{
            return <Card data={data} key={index} locale={locale}/>
        })
      }
        
      </div>
  </div>
</div>
    </>
  }
  