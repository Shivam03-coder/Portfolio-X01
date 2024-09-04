import { ProfileBgSvg, ProfileImg } from "../../../../constants";

const ProfileImageSection = () => {
  return (
    <section className="w-[96%] order-1 md:order-2   relative px-5 mx-auto text-white flex flex-col justify-center gap-4">
      <img
        className=" rounded-2xl animate-pulse  shadow-glass mx-auto relative flex-center z-10"
        src={ProfileImg}
        alt="Profile"
      />
    </section>
  );
};

export default ProfileImageSection;
