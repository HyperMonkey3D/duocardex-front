const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-8 px-3 bg-brand-light-gray w-full">
      <div className="bg-white w-full 2xl:w-[1140px] h-full flex justify-center items-center p-4 border border-brand-accent-gray rounded-lg">
        <div className="w-full xl:w-[800px] h-[800px]">{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
