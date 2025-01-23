import SideBar from './components/SideBar';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <h1>TimeMate</h1>
      <div className="flex min-w-full flex-row">
        <div className="flex h-full w-[30%] flex-col bg-slate-400">
          <SideBar />
        </div>
        <div className="flex h-full w-[70%] flex-col">
          <main
            className={`${styles.main} ${styles.mobileHeaderHeight} min-w-full md:mt-32 md:min-w-0 md:max-w-[1600px]`}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
