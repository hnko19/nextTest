// AirportCard.tsx
import React from 'react';
import { IAirport } from '../../../../Interfaces/Airport';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';

// interface AirportCardProps {
//     airport: IAirport;
//     locale: string
// }

export default function AirportCard ({ airport , locale } : {airport:IAirport , locale: string} )  {
  const t =  useTranslations('Airports');
    return <>
<div className="relative h-full flex items-center justify-center  w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
  <img
      src="https://scaa.gov.sd/wp-content/uploads/2022/03/DSC_0294-390x220.jpg"
      alt="ui/ux review check" className="w-full"
    />
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    
    </div>
  <div className="p-6">
    <div className="mb-3 flex items-center justify-between border-b">
      <h5 className="block font-sans text-xl pb-1 font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
        {locale == "ar" ? airport.Name.ar : airport.Name.en}
      </h5>
    </div>
    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
      
    </p>
    <div className="mt-4">
    <div className="flex flex-wrap">
        <h6 className="font-bold me-2 mt-1">  {t('airportType')}   :</h6>
        <span> {airport.AirportTypeId} </span>
      </div>
      <div className="flex flex-wrap">
        <h6 className="font-bold me-2 mt-1">  {t('airportCode')}  :</h6>
        <span> {airport.Code} </span>
      </div>
      <div className="flex flex-wrap">
        <h6 className="font-bold me-2 mt-1">  {t('location')}  :</h6>
        <span> {airport.AirportLocation} </span>
      </div>
      <div className="flex flex-wrap">
        <h6 className="font-bold me-2 mt-1">  {t('capacity')}  :</h6>
        <span> {airport.Capacity} </span>
      </div>
      <div className="flex flex-wrap">
        <h6 className="font-bold me-2 mt-1">   {t('parkingSpace')}  :</h6>
        <span> {airport.ParkingSize} </span>
      </div>
      
      
      <div className="flex flex-wrap">
        <h6 className="font-bold me-2 mt-1"> {t('runwayLength')}  :</h6>
        <span> {airport.RunWayLength} </span>
      </div>
      
    </div>
    
  </div>
  
</div>
    </>
};


