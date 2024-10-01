import Header from './components/Header'
import Icon from './assets/icons/icon.png'
import QuoteIcon from './assets/icons/quote.png'
import TwitterIcon from './assets/icons/twitter.png'
import DiscordIcon from './assets/icons/discord.png'
import TelegramIcon from './assets/icons/telegram.png'
import LinkedInLogo from './assets/icons/linkedin-logo.png'

const App: React.FC = () => (
  <div className='bg-blue-200'>
    <Header active={'home'} />

    <div
      className='flex flex-col items-center px-10 py-2 text-center bg-white md:rounded-none rounded-3xl md:px-32'
      id='home-tab'
    >
      <p className='mt-10 text-base font-Montserrat'>
        👋, I am&nbsp;
        <span className='font-medium text-green-500 font-MontserratAlternates'>
          Abraham Domenick
        </span>
        &nbsp; and I am a Prolific
      </p>
      <p className='mt-3 text-5xl font-extrabold md:mt-6 font-MontserratAlternates'>
        Brand &amp; <span className='text-green-600'>Marketing</span>
        &nbsp; Strategist.
      </p>
      <p className='mt-5 md:mt-8 font-Montserrat'>
        Enhancing projects visibility and fostering meaningful connections
        within the crypto space.
      </p>
      <div className='mt-8 md:mt-10 flex gap-2 font-Montserrat font-medium text-[13px]'>
        <a href='https://t.me/abdominic1'>
          <button className='px-2 py-3 text-white transition bg-green-600 border border-green-600 rounded-full hover:text-green-600 hover:bg-white md:px-3'>
            Contact me
          </button>
        </a>
        <a href='https://t.me/basepioneer'>
          <button className='px-2 py-3 text-green-600 transition border border-green-600 rounded-full hover:bg-green-600 hover:text-white md:px-3'>
            Join my community
          </button>
        </a>
      </div>
      <div className='mt-5 md:max-w-[50%]'>
        <img src={Icon} />
      </div>
    </div>

    <br id='services-tab' />
    <div className='px-10 mt-5 text-center md:px-32 font-MontserratAlternates'>
      <p className='text-2xl font-medium md:text-5xl h'>
        Prolific and Efficient Web-3 Services in one place.
      </p>
      <br />
      <p className='text-sm md:text-lg'>
        Discover my prolific Web3 skills that drive innovation and unlock new
        possibilities in the decentralized world.
      </p>
    </div>

    <div className='flex flex-wrap items-start justify-center w-full gap-10 px-8 mt-10 md:mt-16'>
      <div className='md:w-[45%] w-full text-center p-8 rounded-lg font-MontserratAlternates bg-white shadow-lg shadow-gray-400'>
        <p className='mb-3 text-xl font-semibold'>
          Prolific Brand and marketing strategy
        </p>
        <p className='text-sm'>
          I have masterred the art of Prolific Brand and Marketing Strategy to
          elevate your Web3 presence and impact.
        </p>
        <img
          className='w-[70%] mx-auto mt-10'
          src='reviews/_all_the_data_re_hh4w.svg'
        />
      </div>

      <div className='md:w-[45%] w-full text-center p-8 rounded-lg font-MontserratAlternates bg-white shadow-lg shadow-gray-400'>
        <p className='mb-3 text-xl font-semibold'>
          Prolific writing Services. Threads &amp; Threads
        </p>
        <p className='text-sm'>
          Masterful Web3 content creation, delivering impactful Threads.
        </p>
        <img className='w-[70%] mx-auto mt-10' src='reviews/writer.svg' />
      </div>

      <div className='md:w-[45%] w-full text-center p-8 rounded-lg font-MontserratAlternates bg-white shadow-lg shadow-gray-400'>
        <p className='mb-3 text-xl font-semibold'>
          Iconic Researcher and Analyst
        </p>
        <p className='text-sm'>
          Expert in delivering sharp, data-driven insights as an Iconic
          Researcher and Analyst in the web3 space.
        </p>
        <img
          className='w-[70%] mx-auto mt-10'
          src='reviews/_the_search_s0xf.svg'
        />
      </div>
    </div>

    <br id='threads-tab' />
    <br />
    <div className='mt-5 text-center px-7 md:px-32 font-MontserratAlternates'>
      <p className='text-2xl font-medium md:text-5xl h'>
        Some Prominent Threads by my humble self.
      </p>
      <br />
      <p className='text-sm md:text-lg'>
        Explore my latest (X) Twitter threads for insights, tips, and opportunities
        in the world of Web3.
      </p>
    </div>

    

    <div className='flex flex-wrap items-start justify-center w-full gap-10 px-8 mt-10 md:mt-16'>
      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/51attack.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          A Blockchain can be Hacked by 51% Attack
        </p>
        <p className='text-sm'>
          Here are ways a blockchain can be hacked and how to prevent it.
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1836371771693433077'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>

      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/discord.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          Discord Server Bot Series. Find out more from the thread.
        </p>
        <p className='text-sm'>
          Are you a Community Manager or Moderator who don't know how to set up
          Discord bot in this thread you will find valuable insights on how to
          set up a discord bots.
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1820772486100738329'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>
      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/whybase.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          Why you should build on Base.
        </p>
        <p className='text-sm'>
          Are you a Developer looking for the next trending blockchain to launch your project?
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1829633900382945352'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>

      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/tradeonbase.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          Why you should trade on Base.
        </p>
        <p className='text-sm'>
          Have you thought about trading on base and you don't know where yo begin? In this thread i explained everything you need to know.
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1829975625483878868'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>

      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/opstack.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          Are you curious about what powers Base?.
        </p>
        <p className='text-sm'>
          Have you been struggling to understand what Optimism Rollups are in base.

In this thread, I'll guide you step by step through what Optimism Rollups are and why they're important in the Base ecosystem. 
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1829103856380240292'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>

      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/gemsofbase.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          Have you been wondering where to spot early base projects?
        </p>
        <p className='text-sm'>
          In this thread i shared tips on how to get early base projects.
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1832001652263457178'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>

      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/onchain.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          Why Base is bringing everyone onchain.
        </p>
        <p className='text-sm'>
          Have you been curious about all the buzz surrounding base bringing everyone onchain? I explained everything you need to know about the mission of base in this thread.
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1838859291928740252'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>

      

      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates transition duration-300 bg-neutral-100 hover:bg-green-600'>
        <div className='w-full mb-5'>
          <img
            className='object-contain object-center w-full rounded-lg'
            src='/reviews/pos.jpeg'
          />
        </div>
        <p className='mb-4 text-xl font-semibold'>
          Pow vs Proof of Stake.
        </p>
        <p className='text-sm'>
          Have you been confuse about what is proof of work and proof of stake? Check it out.
        </p>
        <a href='https://x.com/Abrahamdomenick/status/1820772486100738329'>
          <button className='px-4 py-2 mt-5 text-sm font-medium text-green-600 bg-white border border-gray-200 rounded-full shadow-md font-Montserrat'>
            Learn More »
          </button>
        </a>
      </div>
    </div>

    <br id='reviews-tab' />
    <br />
    <br />
    <div className='mt-5 text-center px-7 md:px-32 font-MontserratAlternates'>
      <p className='text-2xl font-medium md:text-5xl h'>
        Find out what web3 Devs think of my services.
      </p>
      <br />
      <p className='text-sm md:text-lg'>
        Explore honest feedback from Web3 developers who have experienced my
        services firsthand.
      </p>
    </div>

    <div className='flex flex-wrap items-start justify-center w-full gap-10 px-8 mt-10 md:mt-16'>
      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates bg-white'>
        <img src={QuoteIcon} />

        <p className='mt-5 mb-4 font-semibold text-md'>
          “Working with Dominic has been one of the most stress free
          transactions i have had in a while.”
        </p>

        <div className='flex gap-3 mt-2'>
          <img className='w-12 rounded-full' src='/reviews/adtoshi.jpg' />
          <div className='flex flex-col justify-between'>
            <p className='font-semibold font-MontserratAlternates'>Adtoshi</p>
            <p className='text-[12px]'>Founder, Acomunity DAO</p>
          </div>
        </div>
      </div>
      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates bg-white'>
        <img src={QuoteIcon} />

        <p className='mt-5 mb-4 font-semibold text-md'>
          “Collaborated with Dominic, who consistently delivered outstanding results and showcased remarkable professionalism.”
        </p>

        <div className='flex gap-3 mt-2'>
          <img className='w-12 rounded-full' src='/reviews/mogu.jpg' />
          <div className='flex flex-col justify-between'>
            <p className='font-semibold font-MontserratAlternates'>Mogu</p>
            <p className='text-[12px]'>Founder, Green Tv DAO</p>
          </div>
        </div>
      </div>

      <div className='md:w-[45%] w-full p-3 rounded-lg font-MontserratAlternates bg-white'>
        <img src={QuoteIcon} />

        <p className='mt-5 mb-4 font-semibold text-md'>
          “The Discord Server built by Dominic is a professional server and i
          really love working with him, his community building skills is top
          notch.”
        </p>

        <div className='flex gap-3 mt-2'>
          <img className='w-12 rounded-full' src='/reviews/david-jackson.png' />
          <div className='flex flex-col justify-between'>
            <p className='font-semibold font-MontserratAlternates'>
              David Crypto Jackson
            </p>
            <p className='text-[12px]'>Co-Founder, Green Tv DAO</p>
          </div>
        </div>
      </div>
    </div>

    <div className='p-10 mt-10 text-center bg-white rounded-3xl md:rounded-none'>
      <p className='text-2xl font-extrabold font-MontserratAlternates'>
        Now that you have been&nbsp;
        <span className='text-green-600'>convinced,</span> hit any button below.
      </p>
      <div className='mt-8 md:mt-10 flex justify-center gap-2 font-Montserrat font-medium text-[13px]'>
        <a href='https://t.me/abdominic1'>
          <button className='px-2 py-3 text-white transition bg-green-600 border border-green-600 rounded-full hover:text-green-600 hover:bg-white md:px-3'>
            Contact me
          </button>
        </a>
        <a href='https://t.me/basepioneer'>
          <button className='px-2 py-3 text-green-600 transition border border-green-600 rounded-full hover:bg-green-600 hover:text-white md:px-3'>
            Join my community
          </button>
        </a>
      </div>
    </div>

    <footer className='px-5 pb-10 text-center mt-28'>
      <p className='text-lg font-extrabold font-MontserratAlternates md:text-2xl'>
        Abraham Domenick |&nbsp;
        <span className='font-Montserrat'>
          Web3&nbsp;
          <span className='text-green-600'>Enthusiast</span>
        </span>
      </p>

      <hr className='mt-8 border-t-2 border-green-600' />

      <div className='flex justify-around mt-5 text-sm font-medium font-MontserratAlternates md:font-semibold md:text-lg md:justify-evenly'>
        <a href='#home-tab' className='hover:text-green-600'>
          Home
        </a>
        <a href='#services-tab' className='hover:text-green-600'>
          Services
        </a>
        <a href='#threads-tab' className='hover:text-green-600'>
          Threads
        </a>
        <a href='#reviews-tab' className='hover:text-green-600'>
          Reviews
        </a>
      </div>

      <div className='flex mt-8 justify-evenly'>
        <a href='https://x.com/abrahamdomenick'>
          <div className='w-12 p-3 bg-white rounded-full md:p-4 md:w-16'>
            <img className='w-full' src={TwitterIcon} />
          </div>
        </a>
        <a href='https://t.me/abdominic1'>
          <div className='w-12 p-3 bg-white rounded-full md:p-4 md:w-16'>
            <img className='w-full' src={TelegramIcon} />
          </div>
        </a>
        <a href='https://linkedin.com/in/abrahamdominicnewton'>
          <div className='w-12 p-3 bg-white rounded-full md:p-4 md:w-16'>
            <img className='w-full' src={LinkedInLogo} />
          </div>
        </a>
        
        <a href='https://abrahamdominic.hashnode.dev'>
          <div className='w-12 p-3 bg-white rounded-full md:p-4 md:w-16'>
            <img className='w-full' src={DiscordIcon} />
          </div>
        </a>
      </div>
      

      <div className='mt-8 text-sm font-medium text-center font-MontserratAlternates'>
        <p>
          &copy; <span className='font-semibold text-green-600'>2024</span>
          &nbsp;Abraham Domenick.
        </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  </div>
)

export default App
