import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')


Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		name: 'home',
		path: '/home',
		component: Home
	},
	{
		name: 'category',
		path: '/category',
		component: Category
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	},
	{
		name: 'profile',
		path: '/profile',
		component: Profile
	}
]
const  router = new VueRouter({
	routes,
})

export default router