import { SimpleSelect } from "shared/index";

import { SelectChangeEvent } from "@mui/material";
import React from "react";
import { CATEGORIES_IMAGES } from "shared/config/category-config";

type CategoriesProps = {
	onChange: (s: string) => void;
};

export const SelectCategoriesPictures = ({ onChange }: CategoriesProps) => {
	const [value, setValue] = React.useState(CATEGORIES_IMAGES[1].value);
	const handleChange = (e: SelectChangeEvent<any>) => {
		setValue(e.target.value);
	};

	React.useEffect(() => {
		onChange(value);
	}, [value]);

	return (
		<div>
			<SimpleSelect
				nameSelect="Categories images"
				label="Categories images"
				value={value}
				handleChange={handleChange}
				list={CATEGORIES_IMAGES}
				propsStyled={{ width: "200px" }}
			/>
		</div>
	);
};
