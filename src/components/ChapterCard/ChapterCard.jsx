import React, { useState } from 'react'
import Modal from '../Modal'

const ChapterCard = (props) => {
  const { id, title } = props
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <div
        className='bg-white p-4 w-[240px] h-[252px] grid  tracking-[0.4px] items-center text-center'
        onClick={toggleModal}
      >
        <img className="m-auto" src={`/assets/svg/chapters/Chapter_${id}.svg`} alt={`Chapter ${id}`} />
        <p className="text-[14px] leading-[16.16px] opacity-50">
          Chapter {id}
        </p>
        <p className="font-semibold text-[16px] leading-[22.4px]">
          {title}
        </p>
        <div className="slider w-[206px] h-[6px] flex">
          <div className="w-1/6 bg-[#EA7052] rounded"></div>
          <div className="rounded"></div>
        </div>
        <p className="text-[12px] leading-[12px] opacity-25">34 Lessons</p>
      </div>
      {showModal && (
        <Modal
          id={id}
          title={title}
          showModal={showModal}
          onClose={toggleModal}
        />
      )}
    </div>
  )
}

export default ChapterCard
