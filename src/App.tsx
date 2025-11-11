import PopularBlogs from "./components/popularBolgs/PopularBlogs";
import Sidebar from "./components/sidebar/Sidebar";
import TopSellers from "./components/topsellers/TopSellers";

interface childrenType {
  children: React.ReactNode;
}

const App = ({ children }: childrenType) => {
  return (
    <div className="flex min-h-screen justify-between p-3">
      <Sidebar />
      <div>{children}</div>
      <div className="bg-white p-5 mx-5  w-[21%] font-semibold ">
        <TopSellers />
        <PopularBlogs />
      </div>
    </div>
  );
};
export default App;
