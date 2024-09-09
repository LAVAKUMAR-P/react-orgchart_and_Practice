import ImageCard from "../Components/ImageCard/ImageCard";

function ProfilePage() {
  return (
    <div>
      <div className="flex justify-center max-h-28 flex-wrap">
        <ImageCard />
        <div className="p-5 flex justify-center ">
          Ambitious and adaptable software development professional with 2.8+
          years of experience and certification in the MERN stack (MongoDB,
          Express.js, React.js, Node.js). Demonstrates excellence in Software
          Development Lifecycle, multitasking, deadline management, client
          interactions, and team collaboration. Thrives in dynamic environments
          and enthusiastically adopts new technologies.
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
