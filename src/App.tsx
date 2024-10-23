import MenuList from "./components/MenuList";
import "./App.css";
import menuData from "./assets/data/menuData.json";

type FoodItem = {
	id: number;
	itemName: string;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
};

const foodItems: FoodItem[] = menuData;

function App() {
	return (
		<main>
			<h1>MarmiWild</h1>
			{/* pass the variable foodItems as props to MenuList component */}
			<MenuList foodItems={foodItems} />
		</main>
	);
}

export default App;
