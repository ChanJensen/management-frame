import GoodsList from "@/views/mall/goods/GoodsList.vue";
import GoodsCreate from "@/views/mall/goods/GoodsCreate.vue";

export default [
  {
    path: "/mall/goodsList",
    name: "goodsList",
    component: GoodsList
  },
  {
    path: "/mall/goodsCreate",
    name: "goodsCreate",
    component: GoodsCreate
  },
  {
    path: "/",
    redirect: { name: "goodsList" }
  }
];
