import {Link} from 'react-router-dom'

export default function Sidebar() {
      const activeMenu = 'home'
  const menuItems = [
    {
      title: 'Home',
      link: 'home',
      icon: 'home',
    },
    {
      title: 'Live Classes',
      link: 'live_classes',
      icon: 'class',
    },
    {
      title: 'Homework Help',
      link: 'homework_help',
      icon: 'homework',
    },
    {
      title: 'Video Library',
      link: 'video_library',
      icon: 'video',
    },
    {
      title: 'Mock Exam',
      link: 'mock_exam',
      icon: 'mock',
    },
    {
      title: 'Multiplayer Quiz',
      link: 'multiplayer_quiz',
      icon: 'quiz',
    },
    {
      title: 'Practice Exam',
      link: 'practice_exam',
      icon: 'practice',
    },
    {
      title: 'Notifications',
      link: 'notifications',
      icon: 'notification',
    },
    {
      title: 'Learning Report',
      link: 'learning_report',
      icon: 'learning',
    },
    {
      type: 'line',
    },
    {
      title: 'Buy Learning plan',
      link: 'buy_learning_plan',
      icon: 'buy',
    },
    {
      title: 'Manage Subscription',
      link: 'manage_subscription',
      icon: 'subscription',
    },
  ]
    return (
        <div className="left">
          {/*  */}
          <div className="content">
            <div className="logo">
              <img src="/assets/svg/logo/logo.svg" alt="logo" />
            </div>

            <ul>
              {menuItems.map((item, _) =>
                item.type === 'line' ? (
                  <hr key={_ + 1} />
                ) : (
                  <li
                    className={item.link === activeMenu ? 'activeMenu' : ''}
                    key={_ + 1}
                  >
                    <img
                      src={`/assets/svg/menu/${item.icon}.svg`}
                      alt={item.icon}
                    />
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          {/*  */}
        </div>
    )
}