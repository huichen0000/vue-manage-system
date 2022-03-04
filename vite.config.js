import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

export default ({ command }) => {
  // const prodMock = true;
  // const base = process.env.VUE_APP_BASE_API;
  return {
    optimizeDeps: {
      include: ["schart.js"],
    },
    define: { "process.env": {} },
    plugins: [
      vue(),
      viteMockServe({
        supportTs: false,
        mockPath: "mock",
        localEnabled: command === "serve", // 设置为 false 将禁用 mock 功能
        prodEnabled: command !== "serve" && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        logger: true, // 是否在控制台显示请求日志
      }),
    ],
    // dev: {
    //   port: 3000,
    //   proxy: {
    //     "/api": {
    //       target: process.env.VUE_APP_BASE_API, //对mock进行代理，为了区别非mock的代理
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //     },
    //     "/prod-api": {
    //       target: "https://junfeng530.xyz/", //我的博客地址
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/prod-api/, ""),
    //     },
    //   },
    //   open: true,
    // },
  };
};
