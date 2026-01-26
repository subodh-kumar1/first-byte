const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100 active:bg-orange-50">
      {children}
    </div>
  );
};

export default Card;
