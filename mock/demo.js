const list = () => {
  const result = [];
  const total = 10;
  const baseContent =
    '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
  const thumb =
    "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3";

  for (let i = 1; i <= total; i++) {
    const item = {
      id: "@increment",
      name: "轰轰",
      money: 123,
      address: "天台县资金花城",
      thumb,
      state: i === 1 ? "成功" : "失败",
      date:'2022-02-02 22:22:22',
    };
    result.push(item);
  }

  return result;
};

export default [
  {
    url: "/api/demo/tableList",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: list(),
        pageTotal: 40,
      };
    },
  },
];
