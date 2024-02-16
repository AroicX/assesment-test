import React, { useState, useEffect } from 'react'
import VideoPlayer from './VideoPlayer/VideoPlayer'
export const playList = [
  {
    url:
      'https://res.cloudinary.com/aroicx/video/upload/v1708078044/sgvqmy1iorqgbzgc387p.mp4',
    name: 'What are triangles',
  },
  {
    url:
      'https://res.cloudinary.com/aroicx/video/upload/v1708077978/fnushbkfrf41s0z5uezr.mp4',
    name: 'Scalene triangles',
  },
  {
    url:
      'https://res.cloudinary.com/aroicx/video/upload/v1708077942/wxnv7tghyhtmri2vhz9u.mp4',
    name: 'Microscopes and Manification',
  },
  {
    url:
      'https://res.cloudinary.com/aroicx/video/upload/v1708077927/kdw9au02jxawhsiezp4w.mp4',
    name: 'Plants and Animals',
  },
  {
    url:
      'https://res.cloudinary.com/aroicx/video/upload/v1708077925/fjfeylzldkfo7t78pv1f.mp4',
    name: 'Domains of Life',
  },
]

export default function Modal(props) {
  const { showModal, onClose } = props
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videoState, setVideoState] = useState({
    videoName: null,
    videoUrl: null,
    currentTime: 0,
    isPlaying: false,
  })
    

  useEffect(() => {
    // Load the playback state from localStorage when the modal is opened
    if (showModal) {
      const storedState = localStorage.getItem('videoPlayerState')
      if (storedState) {
        const parsedState = JSON.parse(storedState)
        setSelectedVideo(parsedState.videoSrc)
        setVideoState(parsedState)
      }
    }
  }, [showModal])

  const handleClose = (e) => {
    localStorage.removeItem('videoPlayerState')
    onClose && onClose()
  }

  const handleVideoSelection = (videoSrc) => {
    setSelectedVideo(videoSrc)
    setVideoState({
      videoName: videoSrc.name,
      videoUrl: videoSrc.url,
      currentTime: 0,
      isPlaying: true,
    })
  }

  const returnMenu = () => {
    if (!selectedVideo) {
      handleClose()
    }
    if (selectedVideo) {
      const stateToStore = { ...videoState, isPlaying: false }
      localStorage.setItem('videoPlayerState', JSON.stringify(stateToStore))
    }
    setSelectedVideo(null)
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="w-[800px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="prev" onClick={returnMenu}>
                  <div className="p-4 pl-12">
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.10986 11.21L0.999863 6.32L6.10986 1"
                        stroke="#313848"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.0005 6L1.00049 6"
                        stroke="#313848"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid p-2">
                  <div>
                    <p className="text-[16px] font-bold opacity-50">
                      Chapter {props.id}
                    </p>
                    <p className="text-[18px] font-bold">
                      {props.title}
                    </p>
                    <p className="text-[14px] font-semibold opacity-25">
                      76 Lessons
                    </p>
                  </div>
                  <div className="modal-title pt-4">
                    {selectedVideo ? (
                                          <VideoPlayer
                                              
                        videoSrc={selectedVideo.url}
                        currentTime={0}
                        isPlaying={true}
                      />
                    ) : (
                      <div className="my-2">
                        {/* <p className="text-[18px] font-bold">
                          Triangles and polygons
                        </p> */}
                        <div>
                          {playList.map((videoSrc, index) => (
                            <div
                              className="flex py-3 gap-6 items-center"
                              key={index}
                              onClick={() => handleVideoSelection(videoSrc)}
                            >
                              <img
                                src={`/assets/svg/video-preview-${index}.svg`}
                                alt="svg"
                              ></img>
                              <span className="text-[16px] font-semibold">
                                {videoSrc.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
