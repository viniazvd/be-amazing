import Home from './components/home/Home.vue'
import Cadastrar from './components/users/Cadastrar.vue'

export const routes = [
	{ path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
	{ path: '/cadastrar', name: 'cadastrar', component: Cadastrar, titulo: 'Cadastrar', menu: true },
	{ path: '/cadastrar/:id', name: 'alterar', component: Cadastrar, titulo: 'Alterar', menu: false },
	{ path: '*', component: Home, menu: false }
]
