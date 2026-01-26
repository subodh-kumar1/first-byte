const Header = ({ Icon, heading, subheading, HeadingComponent }) => {
  return (
    <div className="bg-orange-600 text-white px-4 py-5 shadow-md">
      <div className="flex items-center gap-2 mb-3">
        {<Icon className="" />}
        <div>
          <HeadingComponent heading={heading} subheading={subheading} />
        </div>
      </div>
    </div>
  );
};

export default Header;
