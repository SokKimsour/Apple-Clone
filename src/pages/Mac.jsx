import { macData_menu } from "../data/mac";
import MacShowProduct from "../components/common/MacShowProduct";
import ShoppingFeature from "../components/common/ShoppingFeature";
const Mac = () => {
    return (
        <div className="">

            <div className="flex items-center justify-center w-full py-4">
                {macData_menu.navigation_menu.map((item) => (
                    <div key={item.name} className="px-5 flex flex-col items-center justify-center" >
                        <img src={item.image} alt={item.name} />
                        <p className="text-[12px]">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="bg-[rgb(245,245,247)]">
                <p className="text-sm text-center py-4">Buy Mac with education savings.<span className="text-blue-500">Shop</span></p>
            </div>
            <MacShowProduct />
            <ShoppingFeature />
        </div>  
    );
};

export default Mac;
