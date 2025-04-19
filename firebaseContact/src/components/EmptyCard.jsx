const EmptyCard = () => (
  <div className="flex h-[60vh] items-center justify-center">
    <div className="flex items-center gap-5">
      <img src="/images/handcontact.png" alt="" />
      <div className="text-xl text-white">No Contact Found</div>
    </div>
  </div>
);

export default EmptyCard;
