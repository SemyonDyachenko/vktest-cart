

import './App.css'
import CartItem from "./components/CartItem.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store.ts";
import {fetchProducts} from "./redux/productSlice.ts";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();
    const {  products, loading,error,totalPrice} = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts() as any);
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
     <>
         <div className="md:w-[1800px] px-20 mx-auto py-20 justify-between flex">
         <div className="w-8/12">
             <div className="text-3xl text-gray-600 font-semibold">
                 Корзина товаров:
             </div>
             {
                 products?.map((item,index) => <CartItem key={index} id={item.id}
                     image={item.image}
                     title={item.title}
                     description={item.description}
                     price={item.price}
                     quantity={item.quantity}
                 /> )
             }

         </div>
             <div className="w-3/12">
                 <div className="text-2xl text-gray-600 font-medium">Итоговый заказ: <span className="text-secondary-500 mx-2"> {totalPrice.toFixed(2)} $</span></div>
                 <div className="mt-4">
                     <ul>
                         {products.map(product => (
                             <li className="my-1 text-gray-600 text-md " key={product.id}>
                                - {product.title} <span className="text-gray-700 font-medium">x {product.quantity} - {product.price * product.quantity}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
                 <div className="mt-8">
                     <button
                         className="w-full bg-secondary-500 py-3 font-semibold rounded-lg text-gray-700 text-lg hover:bg-secondary-600 transition">
                     Оформить заказ
                     </button>
                 </div>
             </div>
         </div>
     </>
  )
}

export default App
