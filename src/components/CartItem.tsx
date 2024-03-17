import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux";
import {incrementQuantity, decrementQuantity, deleteProduct} from '../redux/productSlice';

interface CartItemProps {
    id:number;
    image: string;
    title: string;
    description: string;
    price: number;
    quantity: number;

}

const CartItem: React.FC<CartItemProps> = ({ id,image, title, description, price,quantity  }) => {
    const dispatch = useDispatch();



    const handleIncrement = () => {
        if(quantity === 10) window.alert("Максимальное количество единиц товара.")
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(id));
    };

    const handleDelete = () => {
        if(window.confirm("Вы действительно хотите удалить товар?"))
        dispatch(deleteProduct(id));
    };


    return (
        <div className="flex gap-8 items-center my-10 w-full justify-between">
            <div className="max-w-[100px]">
                <img className="max-w-[100px] w-[100px] h-[120px] rounded-lg" src={image} alt="Product Image" />
            </div>
            <div className="w-8/12">
                <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
                <p className="my-1 w-5/6  text-sm text-gray-600">{description}</p>

            </div>
            <div className="px-5 w-1/5 flex gap-8 items-center">
                <div
                    className="border-secondary-600 border-2 text-xl flex items-center hover:bg-secondary-600 hover:text-white transition justify-center font-bold cursor-pointer  w-[40px] h-[40px] rounded-full text-secondary-600"
                    onClick={handleDecrement}>-
                </div>
                <span className="text-lg text-secondary-600 font-medium">{quantity}</span>
                <div
                    className="border-secondary-600 border-2 text-xl  flex items-center justify-center  hover:bg-secondary-600 hover:text-white transition font-bold cursor-pointer w-[40px] h-[40px] rounded-full text-secondary-600"
                    onClick={handleIncrement}>+
                </div>
            </div>
            <div className="px-5 w-1/6 text-lg font-semibold text-gray-700">
                <p className="">{(price*quantity).toFixed(2)} $</p>
            </div>
            <div className="w-1/12">
            <button className="text-lg px-5 text-gray-600 hover:text-secondary-500 transition" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            </div>
    );
};

export default CartItem;