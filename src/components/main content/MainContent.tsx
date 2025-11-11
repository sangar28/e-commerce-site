import Filter from "./Filter";
import FilterProducts from "./FilterProcuts";
import Pagination from "./Pagination";

const MainContent = () => {
  return (
    <section className="w-[1000px]">
      <div className="mb-5">
        <Filter />
        <FilterProducts />
        <Pagination />
      </div>
    </section>
  );
};
export default MainContent;
