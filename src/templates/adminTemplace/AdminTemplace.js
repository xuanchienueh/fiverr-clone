import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./adminTemplate.css";

const menu = (
  <Menu
    items={[
      { key: "1", label: <Link to="/profile">Profile</Link> },
      {
        key: "2",
        label: (
          <a href="/" onClick={() => localStorage.clear()}>
            Logout
          </a>
        ),
      },
    ]}
  />
);

const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem("User", "sub1", <></>, [
    getItem(<Link to="/admin/adduser">Add User</Link>, "3"),
    getItem(<Link to="/admin/listuser">List User</Link>, "4"),
  ]),
  getItem("Main Job", "sub2", <></>, [
    getItem(<Link to="/admin/listmainjob">List Main Job</Link>, "6"),
  ]),
  getItem("Second Job", "sub3", <></>, [
    getItem(<Link to="/admin/listSubJob">List Second Job</Link>, "7"),
  ]),
];

const AdminTemplace = () => {
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);
  let nameUser = infoUserLogin?.user?.name;
  if (nameUser?.indexOf(" ") > 0) {
    nameUser = nameUser && nameUser.slice(0, nameUser.indexOf(" "));
  }

  if (infoUserLogin?.user?.role !== "ADMIN") return <Navigate to="/" replace={true} />;

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Link to="/" className="logo">
          <img width={200} src="/img/logo-main.png" alt="Logo" />
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background mb-3" style={{ padding: 0 }}>
          <div className="text-success text-right mr-3 float-right">
            <Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
              <div role="button">{`Welcome ${nameUser}`}</div>
            </Dropdown>
          </div>
        </Header>
        <Content>
          <div className="site-layout-background px-3" style={{ padding: 0, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplace;
