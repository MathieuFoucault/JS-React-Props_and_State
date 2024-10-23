import MenuItem from "./MenuItems";

type FoodItem = {
	id: number;
	itemName: string;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
};

type MenuListProps = {
	foodItems: FoodItem[];
};

function MenuList({ foodItems }: MenuListProps) {
	return (
		<>
			{foodItems.map((item) => (
				<MenuItem
					key={item.id}
					itemName={item.itemName}
					description={item.description}
					foodImage={item.foodImage}
					price={item.price}
					isFavorite={item.isFavorite}
				/>
			))}
		</>
	);
}

export default MenuList;
