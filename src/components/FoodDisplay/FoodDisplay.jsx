import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './fooddisplay.css';
import FoodItem from '../FoodItem/FoodItem';


const FoodDisplay = ({ category}) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food_display' id='food_display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list && food_list
                .filter(item => category === "All" || category === item.category)
                .map((item, index)=> (
                     <FoodItem 
                            key={index} 
                            id={item.id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))}
            </div>
        </div>
    );
};

export default FoodDisplay;