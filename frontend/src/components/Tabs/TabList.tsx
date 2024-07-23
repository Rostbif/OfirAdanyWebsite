import { useState } from "react";
import { TabListProps } from "../../types/tabTypes";
import styles from "./TabList.module.css";
import React from "react";
import TabItem from "./TabItem";
import { sanitizeForId } from "../../utils/stringUtils";

type TabListProps = {
  activeTabIndex: number;
  children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
};

const TabList = ({ children, activeTabIndex = 0 }: TabListProps) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  // understand how much tabs we have
  const tabs = React.Children.toArray(children).filter(
    (child: ReactElement) =>
      React.isValidElement(child) && child.type === TabItem
  );

  return (
    <div className="tabs">
      <nav className="tab-list-wrapper">
        <ul
          role="tablist"
          aria-orientation="horizontal"
          className={styles.tabList}
        >
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`}>
              <button
                key={`tab-${index}`}
                role="tab"
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={`${styles.tabBtn} ${
                  activeTab === index && styles.tabBtnActive
                }`}
              >
                {tab.props.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {tabs[activeTab]}
    </div>
  );
};

export default TabList;
