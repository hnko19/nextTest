
export default function MainTitle({title} : {title: string}) {
  return <>
        <div role="main" className="flex flex-col items-center justify-center py-6 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50"> {title} </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12 hidden">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
        </div>
  </>
}
