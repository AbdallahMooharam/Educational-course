import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import { About } from "./pages/About";
import { UsageSinglePage } from "./components/common/UsageSinglePage";
import { Courses } from "./pages/Courses";

import { Blog } from "./pages/Blog";
import { Instructor } from "./pages/Instructor";
import  Session  from "./pages/Session";
import { SessionSinglePage } from "./components/common/SessionSinglePage";
import SessionDetails from "./pages/SessionDetails";
import { Usage } from "./pages/Usage";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Checkout from "./pages/Checkout";
import InstructorDetail from "./pages/InstructorDetail";

import Student from "./components/common/register/Student";
import Teacher from "./components/common/register/Teacher";
import Wallet from "./pages/Wallet";
import Login from "./components/common/Login";
import Video from "./components/common/Video";
import CarousalComponent from "./components/common/Carousal";
import FilterSidebar from "./components/common/Filter";
import { Dashboard } from "./pages/Dashboard";
import Settings from "./components/common/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />{" "}
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />{" "}
          <Route
            path="/courses"
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />{" "}
          <Route
            path="/instructor"
            element={
              <Layout>
                <Instructor />
              </Layout>
            }
          />{" "}
          <Route
            path="/register/student"
            element={
              <Layout>
                <Student />
              </Layout>
            }
          />{" "}
          <Route
            path="/register/teacher"
            element={
              <Layout>
                <Teacher />
              </Layout>
            }
          />{" "}
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />{" "}
          <Route
            path="/wallet"
            element={
              <Layout>
                <Wallet />
              </Layout>
            }
          />{" "}
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />{" "}
          <Route
            path="/single-blog"
            element={
              <Layout>
                <BlogSinglePage />
              </Layout>
            }
          />{" "}
          <Route
            path="/usage"
            element={
              <Layout>
                <Usage />
              </Layout>
            }
          />{" "}
          <Route
            path="/single-usage"
            element={
              <Layout>
                <UsageSinglePage />
              </Layout>
            }
          />{" "}
          <Route
            path="/session"
            element={
              <Layout>
                <Session />
              </Layout>
            }
          />{" "}
          <Route path='/details' element={<SessionDetails />} />
          <Route
            path="/single-session"
            element={
              <Layout>
                <SessionSinglePage />
              </Layout>
            }
          />{" "}
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />{" "}
          <Route
            path="/settings"
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />{" "}
          <Route path="/user/:id/detail/calendar" element={<Calendar />} />{" "}
          <Route path="/user/:id/detail/chat" element={<Chat />} />{" "}
          {/* <Route path="/user/:id" element={<InstructorProfileDetail />} />{" "} */}
          <Route path="calendar/:teacher_id" element={<Calendar />} />{" "}
          <Route path="/chat/:id" element={<Chat />} />{" "}
          <Route path="checkout" element={<Checkout />} />{" "}
          <Route path="instructor/:id" element={<InstructorDetail />} />{" "}
          <Route path="login" element={<Login />} />{" "}
          <Route path="/user/:id/detail/video" element={<Video />} />{" "}
          <Route path="carousal" element={<CarousalComponent />} />{" "}
          <Route path="filter" element={<FilterSidebar />} />{" "}
          <Route path="/wallet" element={<Wallet />} />
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
