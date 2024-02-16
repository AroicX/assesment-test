import { useEffect, useState } from 'react'
import BaseLayout from '../../components/layout/baseLayout'
import { Link,useParams } from 'react-router-dom'
import ChapterCard from '../../components/ChapterCard/ChapterCard'

export default function CourseSlug() {

  const [title, setTitle] = useState('');
   const { id } = useParams();
  useEffect(() => {
    if (id) {
      setTitle(id.toLocaleUpperCase().replace('_',' '))
    }
  },[])
  const chaptersItem = [
    {
      id: 1,
      title: 'Properties Of Plane Shapes',
    },
    {
      id: 2,
      title: 'Indices, Standard Form And Logarithm',
    },
    {
      id: 3,
      title: 'Fractions, Decimals, Percentages And N...',
    },
    {
      id: 4,
      title: 'Introduction To Linear Equation',
    },
    {
      id: 5,
      title: 'Introduction To Linear Equation',
    },
  ]
  return (
    <BaseLayout>
      <div>
        <div className="ma-top-bar w-full flex pt-12">
          <Link className="prev-btn" to={'/'}>
            <div className="p-4 pl-12">
            <img src="../assets/svg/course/back.svg" alt="back" />
            </div>
          </Link>
          <div className="ma-title pt-2 w-1/2">
            <p className=" font-semibold text-[24px] leading-[27.41px]">
              {title}
            </p>
            <p className='mt-2 text-[#313848] font-bold text-[14px] leading-[15.29px] opacity-50'>
              16 ChapterCards / 140 Lessons
            </p>
          </div>
          <div className="search-box w-1/2 z-10">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src="../assets/svg/course/search.svg" alt="search" />

               
              </div>
              <input
                type="text"
                id="simple-search"
                className="z-10 w-[500px] h-[48px] top-[16px] left-[40.41px] border border-1.5 border-gray-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[40px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-[340px] xl:w-[500px]"
                placeholder="Search for a lesson or topic"
                required
              />
            </div>
          </div>
          <div className="fixed top-[-16px] right-[0px] z-0">
            <img src="../assets/svg/course/back-drop.svg" alt="back-drop" />
          </div>
        </div>
        <div className="ma-container p-12">
          <div className="resume-learning pt-4">
            <p className='font-bold text-[18px] leading-[19.66px] tracking-[0.2px]'>
              Resume learning
            </p>
            <div className="resume-class rounded-lg w-[495px] h-[105px] bg-[#EA7052] mt-4 flex items-center">
              <div className="w-1/4 pl-8">
                <img src="../assets/svg/course/plane.svg" alt="plane" />
              </div>
              <div className='resume-desc w-2/4 text-white leading-[19.66px] tracking-[0.2px] font-semobold text-center'>
                <p className="text-[16px]">Properties of Plane Shpaes</p>
                <p className="text-[14px]">You've watched 3 of 7 lessons</p>
              </div>
              <div className="bg-opacity-25 pt-[18px] pl-[16px] bg-white rounded-[50px] w-[50px] h-[50px] items-center  items-center ml-[35px]">
                <div className="m-auto">
                  <img
                    src="../assets/svg/course/back-icon.svg"
                    alt="back-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="chapter-container pt-6 w-full mt-4">
            <p className='font-bold text-[18px] leading-[19.66px] tracking-[0.2px]'>
              All ChapterCards
            </p>
            <div className="flex flex-wrap gap-5 mt-4">
              {chaptersItem.map((chapter) => (
                <Link to="" key={chapter.id + 1}>
                  <ChapterCard id={chapter.id} title={chapter.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
