import { HiBadgeCheck, HiClock, HiTrendingUp } from "react-icons/hi";
import { AiFillDashboard } from "react-icons/ai";
import Divider from "../atoms/sidebar/Divider";
import NavItem from "../atoms/sidebar/NavItem";
import Sidebar from "../molecules/sidebar/Sidebar";
import { useSession } from "next-auth/client";
import Head from "next/head";
import Script from "next/script";

const Layout = ({ children }) => {
  const [session, loading] = useSession();

  return (
    <div className="layout">
      <Head>
        <title>Mitra x Lokaloka | Admin Panel</title>
        <meta name="description" content="Admin panel for Mitra" />
      </Head>
      {/* Sidebar */}
      <Sidebar>
        {/* <NavItem href='/'>
                    <AiFillDashboard className='w-5 h-5' />
                    <span>Dashboard</span>
                </NavItem> */}
        <Divider label="orders" />

        <NavItem href="/transactions">
          <HiBadgeCheck className="w-5 h-5" />
          <span>Transactions</span>
        </NavItem>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 py-8 px-10 bg-blueGray-800 max-h-screen h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
