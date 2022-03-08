const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Super Admin",
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor",
  },
};

const todoList = [
  {
    title: "今天要修复100个bug",
    status: false,
  },
  {
    title: "今天要修复100个bug",
    status: false,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: false,
  },
  {
    title: "今天要修复100个bug",
    status: false,
  },
  {
    title: "今天要修复100个bug",
    status: true,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: true,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: true,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: true,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: true,
  },
  {
    title: "今天要写100行代码加几个bug吧",
    status: true,
  },
];

export default [
  // user login
  {
    url: "/api/user/login",
    method: "post",
    response: (param) => {
      const data = param.body;
      let token;
      if (data.username === "admin") {
        token = tokens["admin"];
      } else {
        token = tokens["editor"];
      }

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: "Account and password are incorrect.",
        };
      }

      return {
        code: 200,
        data: token,
      };
    },
  },

  // get user info
  {
    url: "/api/user/info",
    method: "get",
    response: (query) => {
      const token = query.query.token;
      const info = users[token];

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: "Login failed, unable to get user details.",
        };
      }

      return {
        code: 200,
        data: info,
      };
    },
  },

  // user logout
  {
    url: "/api/user/logout",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: "success",
      };
    },
  },

  {
    url: "/api/user/todoList",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: todoList,
      };
    },
  },
];
