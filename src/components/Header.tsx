import React from 'react'
import { HeaderProps, HeaderLinks } from '../types/header.type'

import ServiceIcon from '../assets/service-icon'
import ReviewsIcon from '../assets/reviews-icon'
import LayerIcon from '../assets/layer-icon'
import CloseIcon from '../assets/close-icon'
import MenuIcon from '../assets/menu-icon'
import HomeIcon from '../assets/home-icon'

const Header: React.FC<HeaderProps> = ({ active }) => {
  const [category, setCategory] = React.useState<boolean>(false)
  const [activeLinks, setActiveLinks] = React.useState<HeaderLinks>(active)
  const [initialAction, setInitialAction] = React.useState<HeaderLinks>(active)

  const categoryLinks = {
    card: React.useRef<HTMLDivElement>(null),
    wrapper: React.useRef<HTMLDivElement>(null)
  }

  React.useEffect(() => {
    const wrapper: HTMLElement | null = categoryLinks.wrapper.current
    const card: HTMLElement | null = categoryLinks.card.current

    wrapper?.addEventListener('click', (e: MouseEvent) => {
      if ((e?.target as Node)?.contains(card)) {
        setCategory(false)
      }
    })

    /** MAKE ICONS ACTIVE ON HOVER */
    const headerIcon = card?.querySelectorAll('.header-icon')

    headerIcon?.forEach(node => {
      node.addEventListener('mouseover', () => {
        const id: string[] = node.id.split('-')
        const id_val: HeaderLinks = id[id.length - 1] as HeaderLinks

        setActiveLinks(id_val)
      })
    })
  })

  return (
    <header className='h-20 md:h-24'>
      <nav className='fixed top-0 z-40 flex items-center justify-between w-full h-20 bg-blue-200 md:h-24 px-7'>
        <div>
          <a href='/'>
            <div className='md:text-[40px] text-2xl font-ProtestGuerrilla leading-5 md:leading-7'>
              <span>Abraham</span>
              <span> Domenick</span>
            </div>
            <div className='text-lg text-right md:text-3xl font-NerkoOne'>
              <span>Web3</span>
              <span className='text-green-700'> Enthusiast</span>
            </div>
          </a>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className='hidden md:block'>
          <ul className='flex gap-9'>
            <li>
              <a href='#home-tab'>
                <div
                  className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 cursor-pointer ${
                    activeLinks === 'home' && 'bg-white shadow-sm'
                  }`}
                  onClick={() => setInitialAction('home')}
                  onMouseOver={() => setActiveLinks('home')}
                  onMouseLeave={() => setActiveLinks(initialAction)}
                >
                  Home
                </div>
              </a>
            </li>
            <li>
              <a href='#services-tab'>
                <div
                  className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 cursor-pointer ${
                    activeLinks === 'services' && 'bg-white shadow-sm'
                  }`}
                  onClick={() => setInitialAction('services')}
                  onMouseOver={() => setActiveLinks('services')}
                  onMouseLeave={() => setActiveLinks(initialAction)}
                >
                  Services
                </div>
              </a>
            </li>
            <li>
              <a href='#threads-tab'>
                <div
                  className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 cursor-pointer ${
                    activeLinks === 'threads' && 'bg-white shadow-sm'
                  }`}
                  onClick={() => setInitialAction('threads')}
                  onMouseOver={() => setActiveLinks('threads')}
                  onMouseLeave={() => setActiveLinks(initialAction)}
                >
                  Threads
                </div>
              </a>
            </li>
            <li>
              <a href='#reviews-tab'>
                <div
                  className={`font-MontserratAlternates font-semibold text-base transition-all duration-200 px-4 py-2.5 rounded-full shadow-gray-500 cursor-pointer ${
                    activeLinks === 'reviews' && 'bg-white shadow-sm'
                  }`}
                  onClick={() => setInitialAction('reviews')}
                  onMouseOver={() => setActiveLinks('reviews')}
                  onMouseLeave={() => setActiveLinks(initialAction)}
                >
                  Reviews
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className='md:hidden w-7' onClick={() => setCategory(e => !e)}>
          <MenuIcon />
        </div>
      </nav>

      {/** CATEGORY BANNER */}
      <div
        className={`md:hidden fixed transition-all duration-300 flex-col inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 category-wrapper ${
          category ? 'flex opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        ref={categoryLinks.wrapper}
      >
        <div className='flex items-center justify-end w-full h-20 pr-7'>
          <div className='w-7' onClick={() => setCategory(false)}>
            <CloseIcon />
          </div>
        </div>
        {/** MAIN CONTENT */}
        <div
          className='flex items-center justify-center w-full h-full'
          ref={categoryLinks.card}
        >
          <div className='max-w-[80%] bg-white rounded-2xl bg-opacity-80 flex flex-wrap justify-evenly font-NerkoOne'>
            {/* HOME ICON */}
            <a href='#home-tab'>
              <div
                className='flex flex-col items-center gap-1 p-6 header-icon'
                id='header-icon-home'
              >
                <HomeIcon
                  className='w-14'
                  color={activeLinks === 'home' ? '#007100' : '#000000'}
                />
                <span
                  className={`text-xl ${
                    activeLinks === 'home' && 'text-green-700'
                  }`}
                >
                  Home
                </span>
              </div>
            </a>
            {/* SERVICES ICON */}
            <a href='#services-tab'>
              <div
                className='flex flex-col items-center gap-1 p-6 header-icon'
                id='header-icon-services'
              >
                <ServiceIcon
                  className='w-14'
                  color={activeLinks === 'services' ? '#007100' : '#000000'}
                />
                <span
                  className={`text-xl ${
                    activeLinks === 'services' && 'text-green-700'
                  }`}
                >
                  Services
                </span>
              </div>
            </a>
            {/* THREAD LAYER ICON */}
            <a href='#threads-tab'>
              <div
                className='flex flex-col items-center gap-1 p-6 header-icon'
                id='header-icon-threads'
              >
                <LayerIcon
                  className='w-14'
                  color={activeLinks === 'threads' ? '#007100' : '#000000'}
                />
                <span
                  className={`text-xl ${
                    activeLinks === 'threads' && 'text-green-700'
                  }`}
                >
                  Threads
                </span>
              </div>
            </a>
            {/* REVIEWS ICON */}
            <a href='#reviews-tab'>
              <div
                className='flex flex-col items-center gap-1 p-6 header-icon'
                id='header-icon-reviews'
              >
                <ReviewsIcon
                  className='w-14'
                  color={activeLinks === 'reviews' ? '#007100' : '#000000'}
                />
                <span
                  className={`text-xl ${
                    activeLinks === 'reviews' && 'text-green-700'
                  }`}
                >
                  Reviews
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
