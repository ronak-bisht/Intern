
import './App.css'
import ProductList from './components/ProductList'
import { Route,Routes } from 'react-router'
import Layout from './components/Layout'

function App() {


  // Improvements -
  // 1) Product list can be loading with suspense and fallback with showing product card skeleton
  // 2) can implement debouncing in search instead of search button
  // 3) can merge search and category both in query params that will allow to filter the searched products (might need some time to implement)
  
  // bugs -
  // If im on a page 2 in pagination and I refresh the page the page will start from the 1st

  // reason -
  // As the current page is storing in state when the page reloads the current page reset to page 1

  // sol-
  // need to store the page in queryParams, right now adding it to query will loose all the other query (mentioned in point 3 above)


    // Main logic starts at ProductList
  return (
   <div>
      <Routes>
        {/* Layout has navbar that will be same for all the routes if any */}
        <Route path='/' element={<Layout />}> 
          <Route index element={<ProductList />}/> 
        </Route>
      </Routes>
   </div>
  )
}

export default App
