import React, { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ videoSrc, currentTime, isPlaying }) => {
  const playerRef = useRef(null)

  const offlinePlay = async () => {
    try {
      const response = await fetch(playerRef.videoSource.vid)
      const blob = await response.blob()
      const cache = await caches.open('video-cache')
      await cache.put(playerRef.videoSource.vid, new Response(blob))
    } catch (error) {
      console.error('Error downloading video:', error)
    }
  }

  useEffect(() => {
    const storedState = localStorage.getItem('videoPlayerState')
    if (storedState) {
      const {
        videoSrc: storedVideoSrc,
        currentTime: storedTime,
        isPlaying: storedPlaying,
      } = JSON.parse(storedState)
      if (storedVideoSrc === videoSrc) {
        playerRef.current.seekTo(storedTime)
        if (storedPlaying) {
          offlinePlay()
          playerRef.current.play()
        }
      }
    }
  }, [videoSrc])

  useEffect(() => {
    if (!isPlaying) {
      const stateToStore = { videoSrc, currentTime, isPlaying: false }
      localStorage.setItem('videoPlayerState', JSON.stringify(stateToStore))
    }
  }, [videoSrc, currentTime, isPlaying])

  return (
    <ReactPlayer
      ref={playerRef}
      url={videoSrc}
      pip={true}
      controls={true}
      playing={isPlaying}
    />
  )
}

export default VideoPlayer
