import Index from '../Pages/Index'
import Catalog from '../Pages/Catalog';
import Delivery from '../Pages/Delivery';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Details from '../Pages/Details';
import Cart from '../Pages/Cart';

const routes = [
    { path: '/', element:<Index/> },
    { path: '/Catalog', element:<Catalog/>},
    { path: '/Delivery', element:<Delivery/>},
    { path: '/About', element:<About/> },
    { path: '/Contacts', element:<Contacts/> },
    { path: '/Details/:id', element:<Details/> },
    { path: '/Cart', element:<Cart/> }
]

export default routes;