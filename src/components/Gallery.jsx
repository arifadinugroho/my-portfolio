import gallery from '../assets/gallery.png'

const Gallery = () => {
    return ( 
        <>
        <div className='flex justify-center items-center text-center pt-32'>
            <img src={gallery} alt="gallery" className="w-[300px] md:min-w-[500px] md:absolute md:right-10 md:top-20"/>
        </div>
        </>
     );
}
 
export default Gallery;