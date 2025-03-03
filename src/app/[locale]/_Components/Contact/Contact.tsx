import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export default async function Contact() {
    const t = useTranslations("ContactUs");
  return <>
  
  <section className="rtl:bg-gradient-to-r rtl:from-blue-200 rtl:via-blue-600 rtl:to-blue-800 ltr:bg-gradient-to-l ltr:from-blue-200 ltr:via-blue-600 ltr:to-blue-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
    <div className="container mx-auto flex flex-col px-6 py-12">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="text-white lg:mx-6 lg:w-1/2">
            <h1 className="text-xl font-semibold capitalize lg:text-3xl"> {t('title')} </h1>
            <div className="mt-6 space-y-8 md:mt-8">
            <p className="-mx-2 flex items-center">
                <i className='fa fa-location-pin'></i>
                <span className="mx-2 w-72 truncate text-white">  {t('location')} </span>
            </p>

            <p className="-mx-2 flex items-center">
                <i className='fa fa-phone'></i>
                <Link href="tel:+249912756926"><span className="mx-2 w-72 truncate text-white"> 912756926(249+) </span></Link>
            </p>

            <p className="-mx-2 flex items-start">
                <i className='fa fa-envelope'></i>
                <Link href="mailto:example@example.com"><span className="mx-2 w-72 truncate text-white"> info@sac.com </span></Link>
            </p>
            </div>

            <div className="mt-6 md:mt-8">
            <h3 className="text-gray-300 hidden">تابعنا </h3>

            <div className="-mx-1.5 mt-4 flex">
                <Link href="https://www.facebook.com/SudanAirports" className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500">
                    <i className='fa fa-brands fa-facebook'></i>
                </Link>

                <Link href="https://www.facebook.com/SudanAirports" className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500">
                    <i className='fa fa-brands fa-twitter'></i>
                </Link>

                <Link href="https://www.facebook.com/SudanAirports" className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500">
                    <i className='fa fa-brands fa-linkedin'></i>
                </Link>

                
            </div>
            </div>
        </div>

        <div className="mt-8 lg:mx-6 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 lg:max-w-xl">
            <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200"> {t('contactUs')} </h1>

            <form className="mt-6">
                <div className="flex-1">
                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200"> {t('name')} </label>
                <input type="text" placeholder="John Doe" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div className="mt-6 flex-1">
                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200"> {t('email')} </label>
                <input type="email" placeholder="johndoe@example.com" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div className="mt-6 w-full">
                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200"> {t('message')} </label>
                <textarea className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:h-48" placeholder="Message"></textarea>
                </div>

                <button className="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>
  </>
}
