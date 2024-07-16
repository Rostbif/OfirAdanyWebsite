// so I have here sub-menu. How should I manage it?
// Should I maybe start with one page only? and then deal with that?

import AddPost from "../components/AddPost";
import TabItem from "../components/Tabs/TabItem";
import TabList from "../components/Tabs/TabList";

const AdminPanel = () => {
  return (
    <div className="flex-grow flex flex-col items-center">
      <h1> Admin Panel </h1>
      {/* I guess that here I should render the children */}
      <TabList activeTabIndex={0}>
        <TabItem label="Posts">
          <AddPost />
        </TabItem>
        <TabItem label="Categories">
          <h1>Categories management!!</h1>
        </TabItem>
        <TabItem label="Users">
          <h1>Users management!!</h1>
        </TabItem>
      </TabList>
    </div>
  );
};

export default AdminPanel;
