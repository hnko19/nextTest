
export default async function Card() {
  
  let response: Response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=19.6&lon=37.2&appid=d13907bd394faa313bec8ed34f947766&units=metric");
  let res:IWeather = await response.json();


  const date = new Date(res.dt * 1000); // تحويل Unix timestamp إلى تاريخ
  const day = date.toLocaleDateString("en-US", { weekday: "long" }); // استخراج اليوم
  const temp = res.main.temp; // استخراج درجة الحرارة
  
  const month = date.toLocaleString("en-US", { month: "short" }); // Extract short month name
  const year = date.getFullYear().toString().slice(-2); // Extract last two digits of the year
  const dateString = `${day} ${month} ${year}`; // Format as "15 Jan 19"
  return <>

<div className="w-full lg:px-10 justify-center container mx-auto">
      <div className="flex flex-wrap w-full lg:w-auto">
        {/* القسم الأيسر - معلومات الطقس */}
        <div
          className="w-full rounded-lg bg-auto"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')",
          }}
        >
          <div className="rounded-lg py-6 pl-8 pr-32 w-full bg-slate-600 opacity-90 text-white text-left">
            <div className="mb-10">
              <h2 className="font-bold text-2xl leading-none pb-1">{day}</h2>
              <h3 className="leading-none pb-2 pl-1">{dateString}</h3>
              <p className="flex items-center opacity-75">
                
              {res.sys.country} - {res.name}
              <svg
                  className="w-4 inline mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 425.963 425.963"
                  fill="#FFFFFF"
                >
                  <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081 c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002 c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482 C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884c-34.123,0-61.884-27.761-61.884-61.884 s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z" />
                </svg>
              </p>
            </div>
            <div>
              <strong className="leading-none text-xl block font-weight-bolder">{res.main.temp}ºC</strong>
              <b className="text-2xl block font-bold">{res.weather[0].main}</b>
            </div>
            <div className="mt-4 border border-yellow-300 p-2 rounded-lg">
              <h3 className="mb-1">Wind</h3>
              <strong className="leading-none  block font-weight-bolder">Speed: {res.wind.speed}</strong>
              <b className=" block font-bold">Deg: {res.wind.deg}</b>
              <b className=" block font-bold">Gust: {res.wind.gust}</b>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  </>
}
