import Home from './components/home/Home.vue'
import Cadastrar from './components/users/Cadastrar.vue'

export const routes = [
	{ path: '', component: Home, titulo: 'Home' },
	{ path: '/cadastrar', component: Cadastrar, titulo: 'Cadastrar' }
]
