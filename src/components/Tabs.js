import "../css/Tabs.css";
import { useState } from "react";

export const Tabs = ({ page }) => {
  const [activeTab, setActiveTab] = useState(1);

  const changeActiveTab = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="tabs-container">
      <div className="tabs-row">
        {page.tabs.map((tab, i) => {
          return (
            <div
              key={tab + i}
              className={activeTab === i + 1 ? "tabs active-tab" : "tabs"}
              onClick={() => changeActiveTab(i + 1)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <div className="tabs-content">
        {page.content.map((media, i) => {
          return (
            <div
              key={i}
              className={
                activeTab === i + 1
                  ? "display-content active-content"
                  : "display-content"
              }
            >
              {media}
            </div>
          );
        })}
      </div>
    </div>
  );
};
