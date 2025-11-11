import Sidebar from "./components/sidebar/Sidebar";

interface childrenType {
  children: React.ReactNode;
}

const App = ({ children }: childrenType) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
export default App;
