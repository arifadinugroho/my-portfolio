import profile from '../assets/pp2.jpeg'

const Profile = () => {
    return ( 
        <>
            <div className="flex justify-center items-center md:absolute md:left-10 md:pt-20 md:pl-20">
                <img src={profile} alt="ini adalah fotoku" title="Ini adalah aku" className="w-[250px] md:w-[250px] prof-shadow"/>
            </div>
        </>
     );
}
 
export default Profile;