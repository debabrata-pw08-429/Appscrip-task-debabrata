import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import TopBarWithFilter from "./components/TopBarWithFilter";
import Menu from "./components/MenuSection";
import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";

function App() {
  const [setSort] = useState("RECOMMENDED");
  const [showFilter, setShowFilter] = useState(true);

  const handleSortChange = (selected) => {
    setSort(selected);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Navbar />
      <Menu />
      <HeroSection />
      <TopBarWithFilter
        totalItems={3425}
        onSortChange={handleSortChange}
        showFilter={showFilter}
        onShowFilter={handleShowFilter}
      />
      <div style={{ display: "flex", padding: "20px" }}>
        {showFilter && (
          <div style={{ width: "200px", marginRight: "20px" }}>
            <Sidebar />
          </div>
        )}
        <div style={{ padding: "20px" }}>
          <ProductList />
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default App;
