"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import aboutCompany from '/public/images/aboutCompany.png';
import LongLogo from '/public/images/LongLogo.png';
import Card from '../Airports/Card';
import { useLocale } from 'next-intl';

// استيراد مكوّن Slider بشكل ديناميكي
const Slider: any = dynamic(() => import('react-slick'), { ssr: true });

export default async function SudanAirport() {
    // استدعاء API لجلب بيانات المطارات
    let response = await fetch("https://privatecodetechnology.com/api/Airports");
    const airports = await response.json();
    const locale = useLocale();
    // إعدادات العرض للسلايدر
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className='mb-10'>
            <Slider {...settings}>
                {airports.map((airport: any, index: number) => (
                    <Card key={index} airport={airport} locale={locale}/>
                ))}
            </Slider>
        </div>
    );
}
