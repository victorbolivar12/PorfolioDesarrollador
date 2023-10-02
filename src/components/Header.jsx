import img from './../assets/profile-pic.png'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
import img2 from './../assets/profile1.jpg'


const Header = () => {
  return (
    <section className='w-[100%] flex p-3 mb-12'>
      <img src={img2} alt="profile pic" className='w-32	 bg-slate-50 rounded-full mr-5' />
      <div>
        <h1 className='font-bold'>Victor Bolivar</h1>
        <h2 className='font-semibold'>Desarrollador Web</h2>
        <div className='flex'>
          <FaLocationDot className='mr-1 mt-1 mb-3 text-green-500' />
          <p className='font-normal'> Bolivar, Venezuela</p>
        </div>
        <div className='flex gap-x-1'>
          <a target='_blank' href="https://github.com/victorbolivar12?tab=repositories"><AiFillGithub className='text-2xl text-green-500 hover:text-green-700' /></a>
          <a target='_blank' href="https://www.linkedin.com/in/victor-bolivar-221515224/"><AiFillLinkedin className='text-2xl text-green-500 hover:text-green-700' /></a>
          <a href=""><AiOutlineTwitter className='text-2xl text-green-500 hover:text-green-700' /></a>
          <a href=""><AiOutlineLink className='text-2xl text-green-500 hover:text-green-700' /></a>
        </div>
      </div>
    </section>
  )
}

export default Header;
