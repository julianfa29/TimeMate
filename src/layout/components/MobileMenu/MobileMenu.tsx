const MobileMenu: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-row justify-around gap-[10%] bg-slate-400 text-sm md:hidden">
      <h3>Projects</h3>
      <h3>Calendar</h3>
      <h3>Chats</h3>
      <h3>Settings</h3>
    </div>
  );
};

export default MobileMenu;
