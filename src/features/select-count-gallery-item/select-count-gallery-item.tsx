import { SelectChangeEvent } from "@mui/material";
import React from "react";
import { COUNT_ITEM } from "shared/config/category-config";
import { SimpleSelect } from "shared/index";

type CategoriesProps = {
	onChange: (s: string) => void;
};

export const SelectCountGalleryItem = ({ onChange }: CategoriesProps) => {
	const [value, setValue] = React.useState(COUNT_ITEM[1].value);
	const handleChange = (e: SelectChangeEvent<any>) => {
		setValue(e.target.value);
	};

	React.useEffect(() => {
		onChange(value);
	}, [value]);

	return (
		<div>
			<SimpleSelect nameSelect="Type" label="Type" value={value} handleChange={handleChange} list={COUNT_ITEM} />
		</div>
	);
};
