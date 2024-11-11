import { Button } from "../ui/button";
import AllFollowers from "./AllFollowers";

const FollowData = ({ label, onClose, followData = [] }) => {
  return (
    <div className="flex items-center justify-center w-full h-full z-[99] bg-black/10 p-4">

    <div className="p-8 w-full  bg-dark-3 rounded-3xl max-w-[500px]">
      <div className="flex w-full justify-between ">
        <h2 className="h3-bold md:h2-bold text-left w-full">{label}</h2>
        <Button
          type="button"
          className="rounded-full w-10 h-10 border border-white/40 text-xl"
          onClick={onClose}
        >
          X
        </Button>
      </div>
      <hr className="border w-full border-white/10 my-5" />

      <div className="w-full max-h-[500px] overflow-y-auto custom-scrollbar">
        {followData.length === 0 ? (
          <p className="text-light-4 mt-10 text-center w-full">
            Nothing to show
          </p>
        ) : (
          <ul className="flex flex-1 flex-col mx-2 lg:mx-4">
            {followData.map((id) => (
              <AllFollowers key={id} creatorId={id} />
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
};

export default FollowData;
