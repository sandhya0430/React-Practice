//import{profile} from'../assets/ProfilePicture.jpg'; 
function ProfilePicture ()
{
    const imageUrl='/assets/ProfilePicture.jpeg';
    // const handleClick=()=>console.log("Profile Picture clicked");
    const handleClick=(e)=e.target.style.display="none";
    return(<img onClick={(e)=>handleClick(e)}src={imageUrl} alt="Profilepic"></img>);

}export default ProfilePicture;