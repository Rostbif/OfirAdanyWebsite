//import { TabItemProps } from "../../types/tabTypes";
import { sanitizeForId } from "../../utils/stringUtils";
import styles from "./TabItem.module.css";

type TabItemProps = {
  label: string;
  children: ReactNode;
};

const TabItem = ({ label, children }: TabItemProps) => {
  return (
    <div
      role="tabpanel"
      aria-labelledby={`tab-${sanitizeForId(label)}`}
      id={`panel-${sanitizeForId(label)}`}
      className={styles.tabPanel}
    >
      {children}
    </div>
  );
};

export default TabItem;
