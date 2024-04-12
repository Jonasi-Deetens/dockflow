import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ComponentList from "../data/ComponentList";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const [activeTabs, setActiveTabs] = useState([]);

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

  const toggleMode = (active) => {
    console.log(active);
  };

  const functionNames = {
    onToggle,
    toggleMode,
  };

  return (
    <main className="min-h-svh flex items-center">
      <ResponsiveGridLayout
        className="layout mx-auto my-20"
        breakpoints={{ lg: 1000, md: 900, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 8, md: 6, sm: 6, xs: 4, xxs: 2 }}
        //rowHeight={150}
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
                data-grid={gridData}
                className="grid-item flex items-center justify-center rounded-3xl bg-neutral-100 z-10 hover:shadow-md hover:cursor-grab active:shadow-lg active:cursor-grabbing active:z-20"
              >
                <Component {...props} {...functionProps} />
              </div>
            )
          );
        })}
      </ResponsiveGridLayout>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};

export default Home;
