import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ComponentList from "../data/ComponentList";
import FilterBar from "../components/FilterBar";
import Layouts from "../data/layouts";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const [activeTabs, setActiveTabs] = useState([]);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setHeight(160);
      } else if (window.innerWidth < 768) {
        setHeight(220);
      } else {
        setHeight(300);
      }
      console.log(Layouts);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onToggle = (tag, active) => {
    if (active) setActiveTabs([...activeTabs, tag]);
    else {
      let currentTabs = [...activeTabs];
      const i = currentTabs.indexOf(tag);

      if (i != -1) {
        currentTabs.splice(i, 1);
        setActiveTabs(currentTabs);
      }
    }
  };

  const functionNames = {
    onToggle,
  };

  return (
    <main className="min-h-svh flex flex-col items-center">
      <FilterBar handleToggle={onToggle} />
      <ResponsiveGridLayout
        className="layout mx-auto mb-20"
        isBounded={true}
        layouts={Layouts}
        breakpoints={{ lg: 1200, md: 1000, sm: 768, xs: 500, xxs: 320 }}
        cols={{ lg: 4, md: 4, sm: 4, xs: 2, xxs: 2 }}
        rowHeight={height}
        isResizable={false}
      >
        {ComponentList.map((item) => {
          const {
            component: Component,
            props,
            functions,
            id,
            gridData,
            tag,
          } = item;
          const functionProps = {};

          functions.forEach((name) => {
            const functionProp = functionNames[name];

            if (functionProp) {
              functionProps[name] = functionProp;
            }
          });

          return (
            (activeTabs.includes(tag) || tag == "") && (
              <div
                key={id}
                // data-grid={gridData}
                className="grid-item flex items-center justify-center rounded-3xl bg-neutral-50 z-10 hover:shadow-md hover:cursor-grab active:shadow-lg active:cursor-grabbing active:z-20"
              >
                <Component {...props} {...functionProps} />
              </div>
            )
          );
        })}
      </ResponsiveGridLayout>
    </main>
  );
};

export default Home;
