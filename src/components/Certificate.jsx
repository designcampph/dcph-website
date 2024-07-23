import React,{useRef} from 'react'
import Logo from '../assets/logo.png'
import { toPng } from 'html-to-image';
import { useLocation, Link } from 'react-router-dom';

const Certificate = (props) => {

    const location = useLocation()
    const name = location.state.name
    const title = location.state.title

    const elementRef = useRef(null)

    const htmlToImageConvert = () => {
        toPng(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "Certificate.png";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (


    <div>
    <div className='w-screen h-[10%] pt-4 px-4 bg-red-500 text-xl font-bold text-white text-center'>
        <h1> Download Certificate using Desktop</h1>
    </div>

    <div ref={elementRef} className='w-screen h-screen bg-white border-black border-4 p-14 text-center sm:backdrop-blur-md md:backdrop-blur-md sm:hidden md:hidden'>
        <div className='flex mb-8'>
            <div className='grow w-[40%] h-16'></div>
            <img src={Logo} className='w-42 h-16 content-center'></img>
            <div className='grow w-[40%] h-16'></div>
        </div>
        <h1 className='text-4xl tracking-wider font-serif'>Certificate of</h1>
        <h1 className='text-8xl tracking-wider font-serif mb-8'>Completion</h1>
        <h3 className='mb-8'>is given to</h3>
        <h1 className='text-5xl tracking-normal font-bold font-serif mb-12 border-b-2'>{name}</h1>
        <h2 className='mb-4'>for completing the course by <b>Design Camp Philippines </b> entitled</h2>
        <h1 className='text-4xl tracking-wider font-serif mb-24'>{title}</h1>
        <h2 className='text-lg font-semibold'>King Jasser Andaya</h2>
        <p className='text-sm font-light'>Design Camp PH Training Head</p>
    </div>

    <div className='mt-4 mb-4 p-3 text-center ml-[30%] mr-[30%] w-[40%] h-12 bg-green-400 rounded-full drop-shadow-xl border-gray-400 hover:bg-green-600 md:hidden sm:hidden'>
        <button onClick={htmlToImageConvert}>Download Certificate</button>
    </div>
    <div className='mt-4 mb-4 p-3 text-center ml-[40%] mr-[40%] w-[20%] h-12 bg-gray-400 rounded-full drop-shadow-xl border-gray-400 hover:bg-black hover:text-white md:hidden sm:hidden'>
    <button><Link to='/dashboard'>Back to Dashboard</Link></button>
    </div>

    </div>
  )
}

export default Certificate