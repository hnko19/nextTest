import Image from "next/image";
import LongLogo from "../../../../../public/images/LongLogo.png"
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return <>
<footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
  <div className="max-w-screen-xl px-4 pt-16 pb-3 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <Image src={LongLogo} className="" alt="logo" />
        <p className="max-w-xs mt-4 text-sm text-gray-600">
          
        </p>
        <div className="flex mt-8 space-x-6 text-gray-600">
          <Link href="https://www.facebook.com/SudanAirports" className="hover:opacity-75"  target="_blank" rel="noreferrer">
            <i className='fa fa-brands fa-facebook fa-2x'></i>
          </Link>
          <Link href="https://www.facebook.com/SudanAirports" className="hover:opacity-75 mx-1"  target="_blank" rel="noreferrer">
            <i className='fa fa-brands fa-twitter fa-2x'></i>
          </Link>
          <Link href="https://www.linkedin.com/company/sudan-airports-holding-company/" className="hover:opacity-75"  target="_blank" rel="noreferrer">
            <i className='fa fa-brands fa-linkedin fa-2x'></i>
          </Link>
          <Link href="https://wa.me/249991365203" className="hover:opacity-75"  target="_blank" rel="noreferrer">
            <i className='fa fa-brands fa-whatsapp fa-2x'></i>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-medium">
             {t('company')}
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link  href="" className="hover:opacity-75" > {t('projects')} </Link>
            <Link  href="" className="hover:opacity-75" > {t('news')} </Link>
            <Link  href="" className="hover:opacity-75" > {t('tenders')} </Link>
          </nav>
        </div>
        <div>
          <p className="font-medium">
          {t('sudanAirports')}
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link  href="" className="hover:opacity-75" >  {t('khartoum')}  </Link>
            <Link  href="" className="hover:opacity-75" >    {t('kassala')}  </Link>
            <Link  href="" className="hover:opacity-75" >  {t('portsudan')}  </Link>
          </nav>
        </div>
        <div>
          <p className="font-medium">
          {t('relatedLinks')}
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link  href="" className="hover:opacity-75" > {t('caa')} </Link>
            <Link  href="" className="hover:opacity-75" > {t('sudanair')} </Link>
            <Link  href="" className="hover:opacity-75" >    {t('tarco')}   </Link>
            <Link  href="" className="hover:opacity-75" > {t('badr')} </Link>
          </nav>
        </div>
        <div>
          <p className="font-medium">
          {t('rules')}
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" > Privacy Policy </a>
            <a className="hover:opacity-75" > Terms &amp; Conditions </a>
            <a className="hover:opacity-75" > Returns Policy </a>
            <a className="hover:opacity-75" > Accessibility </a>
          </nav>
        </div>
      </div>
    </div>
    <hr className="mt-6"/>
    <p className="mt-8 text-center text-xs text-gray-800">
      © 2024 Sudan Airports Company LTD. - Developed By IT Department
    </p>
  </div>
</footer>
  </>
}
