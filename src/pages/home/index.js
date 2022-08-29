import React, { useState } from "react";
import Header from "../../components/common/header";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import Footer from "../../components/footer";
import Nightlife from "../../components/nightlife";
import TabOptions from "../../components/tabOptions";
const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
