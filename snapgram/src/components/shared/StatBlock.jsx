const StatBlock = ({ value, label, setShowFollowData }) => {
  
  return (
    <>
      <div className="flex-center gap-2" onClick={() => setShowFollowData(true)}>
        <p className="small-semibold lg:body-bold text-primary-500 cursor-pointer">{value}</p>
        <p className="small-medium lg:base-medium text-light-2 cursor-pointer">{label}</p>
      </div>
    </>
  );
};

export default StatBlock;
