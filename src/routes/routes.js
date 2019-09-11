const ROUTES = {
  HOME: "/",
  EXPLORE: "/explore",
  EXPLORE_PAGES: {
    INSIGHT: "/explore/insight",
    LEARN: "/explore/learn",
    REVIEW: "/explore/review"
  },
  ACCOUNT: "/account",
  ACCOUNT_PAGES: {
    DASHBOARD: "/account/dashboard",
    VIEW: "/account/view",
    REVIEW: "/account/review",
    REVIEW_PAGES: {
      ALL: "/account/review/all",
      DATA: "/account/review/data",
      MERGES: "/account/review/merges",
      API: "/account/review/api",
      ORACLE: "/account/review/oracle",
      CONSENSUS: "/account/review/consensus",
      DISPUTES: "/account/review/disputes",
    },
    MANAGE: "/account/manage",
    MANAGE_PAGES: {
      ADD: "/account/manage/add",
      INTEGRATE: "/account/manage/integrate",
    },
    UNAUTHORIZED: "/account/unauthorized"
  },
  TRADE: "/trade",
  ABOUT: "/about",
  DOCS: "/docs",
  INTEGRATION: "/integration",
  LICENSE: "/license",
  DONATE: "/donate",
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout"
};

export default ROUTES;
