import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Socmed = () => {
    return ( 
        <>
            <div className="flex absolute bottom-14 pl-4 md:pl-10 md:bottom-56">
                <div className='pr-5'><a href=""><FaGithub className='text-3xl'/></a></div>
                <div><a href=""><FaLinkedinIn className='text-3xl'/></a></div>
            </div>
        </>
     );
}
 
export default Socmed;