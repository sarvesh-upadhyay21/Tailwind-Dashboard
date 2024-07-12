import { RiLogoutCircleRLine } from "react-icons/ri";
const FreeCard = () => {
  return (
    <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px]">
       <div className=" flex h-fit flex-col items-center">
       <p className="text-lg font-bold text-red-500 flex items-center">
     <RiLogoutCircleRLine className="mr-2" />Logout
        </p>

          </div>
    </div>
  );
};

export default FreeCard;
