"use client";
import Slider from 'react-slick';
import Card from './Card';
import { AirportResponse, IAirport } from '../../../../Interfaces/Airport';

import { useEffect, useState } from 'react';
import MainTitle from '../Title/MainTitle';
import { apiUrl } from '@/helpers/config';

export default function AirPortsSlider({ locale }: { locale: string }) {
    const [airports, setAirports] = useState<IAirport[]>([]);

  // إعدادات السلايدر
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // للشاشات المتوسطة
        settings: {
          slidesToShow: 2, // عرض 3 شرائح
        }
      },
      {
        breakpoint: 768, // للشاشات الصغيرة
        settings: {
          slidesToShow: 1, // عرض شريحتين
        }
      }
    ]
  };


    useEffect(() => {
        fetch(apiUrl + "Airports")
            .then(response => response.json())
            .then((data: AirportResponse) => {
                setAirports(data.data); // تحديث حالة `airports` بالبيانات المستلمة
            })
            .catch(error => console.error("Failed to fetch airports:", error));
    }, []);

    return <>
        
        <MainTitle title='مطارات السودان' />
        <div className="container mx-auto py-10">
            <Slider {...settings}>
                {airports.map((airport: IAirport , index: number) => (
                    <div key={airport.Id} className='flex items-center justify-center'>
                        <Card airport={airport} locale={locale} key={index}/>
                    </div>
                ))}
            </Slider>
        </div>
   
    </>
}

