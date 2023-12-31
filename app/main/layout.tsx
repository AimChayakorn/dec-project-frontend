import SideBar from './sidebar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <SideBar />
    <div>{children}</div>
    </div>
  );
}