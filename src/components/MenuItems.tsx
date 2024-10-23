import { useState } from "react";

type MenuItemProps = {
	itemName: string;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
};

function MenuItem({
	itemName,
	description,
	foodImage,
	price,
	isFavorite: trueOrFalse,
}: MenuItemProps) {
	const [isFavorite, setIsFavorite] = useState(trueOrFalse);

	const handleClickFavorite = () => {
		setIsFavorite((trueOrFalse) => !trueOrFalse);
	};

	return (
		<section className="itemContainer">
			<figure className="imgContainer">
				<img src={foodImage} alt={itemName} />
				<figcaption>
					<h2>{itemName}</h2>
					<p>{description}</p>
				</figcaption>
			</figure>
			<aside>{price} EUR</aside>

			<button type="button" onClick={handleClickFavorite}>
				{isFavorite ? "❤️" : "🖤"}
			</button>
		</section>
	);
}

export default MenuItem;
