import { useState } from 'react'
import BaseLayout from '../../components/layout/baseLayout'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const playlistItems = [
    {
      title: 'Mathematics',
      color: '#EA7052',
      icon: 'maths',
    },
    {
      title: 'English language',
      color: '#506AAC',
      icon: 'english',
    },
    {
      title: 'Chemistry',
      color: '#FCA964',
      icon: 'chemistry',
    },
    {
      title: 'Biology',
      color: '#68BC98',
      icon: 'bio',
    },
    {
      title: 'Physics',
      color: '#7B7FDA',
      icon: 'physics',
    },
    {
      title: 'Economics',
      color: '#EE6B6B',
      icon: 'econs',
    },
    {
      title: 'Accounting',
      color: '#5CBBF3',
      icon: 'acc',
    },
    {
      title: 'Literature in English',
      color: '#B75C8D',
      icon: 'lit',
    },
    {
      title: 'Government',
      color: '#EFBC37',
      icon: 'govt',
    },
  ]

  return (
    <BaseLayout>
      <div className="u_dashboard">
        <div className="u_dashboard-banner cursor-pointer">
          <img width="100%" src="/assets/svg/home/banner.svg" alt="banner" />
        </div>
        <div className="u_dashboard-playlist my-5">
          <h3 className="text-2xl font-bold text-gray-900 mt-10">
            Watch Video Lessons
          </h3>
          <div className="u_dashboard-playlist-content">
            {playlistItems.map((playlist) => (
              <Link
                to={`/courses/${playlist.title.replace(' ', '_').toLowerCase()}`}
                key={playlist.title}
                className="u_dashboard-playlist-content--card"
                style={{ background: playlist.color }}
              >
                <img
                  src={`/assets/svg/home/playlist/${playlist.icon}.svg`}
                  alt=""
                />
                <p>{playlist.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="u_dashboard-practice">
          <div>
            <span className="uppercase">Practice exam</span>
            <h3>Ready to test your knowledge?</h3>
            <p>
              Take practice exams to prepare for upcoming exams. Practice makes
              perfect grades!
            </p>
            <div>
              <button>Start practice</button>
            </div>
          </div>
          <div>
            <img src="/assets/svg/home/practice.svg" alt="practice" />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
