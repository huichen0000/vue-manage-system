const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,

  tagsList: (state) => state.tagsView.tagsList,
  collapse: (state) => state.tagsView.collapse,

  permission_routes: (state) => state.permission.routes,
  directivePermission: (state) => state.permission.directivePermission,
  // errorLogs : state => state.errorLog.logs,

  // 用户信息
  name: (state) => state.user.name,
  avatar: (state) => state.user.avatar,
  introduction: (state) => state.user.introduction,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
};
export default getters
