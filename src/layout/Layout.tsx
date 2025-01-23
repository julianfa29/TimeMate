import MobileMenu from './components/MobileMenu';
import SideBar from './components/SideBar';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <h1>TimeMate</h1>
      <div className="flex min-w-full flex-col md:flex-row">
        <div className="hidden h-full w-[30%] flex-col bg-slate-400 md:flex">
          <SideBar />
        </div>
        <div className="flex h-full flex-row md:w-[70%] md:flex-col">
          <main
            className={`${styles.main} ${styles.mobileHeaderHeight} min-w-full md:mt-32 md:min-w-0 md:max-w-[1600px]`}
          >
            {children}
          </main>
        </div>
        <MobileMenu />
      </div>
    </>
  );
};

export default Layout;
