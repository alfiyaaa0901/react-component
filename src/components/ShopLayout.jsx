import CrochetSection from "./CrochetSection";
import ShopTopbar from "./ShopTopbar";
import ShopSidebar from "./ShopSidebar";
import AccessoriesSection from "./AccessoriesSection"
import CeramicsSection from "./CeramicsSection";
import CollectiblesSection from "./CollectiblesSection";
import Pagination from "./Pagination";

function ShopLayout() {
  return (
    <div className="shop-layout">

      <ShopSidebar />

      <main aria-label="Product listings">

       <ShopTopbar />

        <CrochetSection />

        <AccessoriesSection />

        <CeramicsSection />

        <CollectiblesSection />

        <Pagination />

      </main>

    </div>
  );
}

export default ShopLayout;