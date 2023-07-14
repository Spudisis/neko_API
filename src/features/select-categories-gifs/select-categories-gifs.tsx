import React from "react";
import { SimpleSelect } from "shared/index";

import { SelectChangeEvent } from "@mui/material";
import { CATEGORY_GIFS } from "shared/config/category-config";

type CategoriesProps = {
	onChange: (s: string) => void;
	value: string;
};

export const SelectCategoriesGifs = ({ onChange, value }: CategoriesProps) => {
	const handleChange = (e: SelectChangeEvent<any>) => {
		onChange(e.target.value);
	};

	return (
		<SimpleSelect
			nameSelect="Categories gif"
			label="Categories gif"
			value={value}
			handleChange={handleChange}
			list={CATEGORY_GIFS}
			propsStyled={{ width: "200px" }}
		/>
	);
};
