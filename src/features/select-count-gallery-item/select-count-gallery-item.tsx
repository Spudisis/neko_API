import { SelectChangeEvent } from "@mui/material";
import { COUNT_ITEM } from "shared/config/category-config";
import { SimpleSelect } from "shared/index";

type CategoriesProps = {
	onChange: (s: string) => void;
	value: string;
};

export const SelectCountGalleryItem = ({ onChange, value }: CategoriesProps) => {
	const handleChange = (e: SelectChangeEvent<any>) => {
		onChange(e.target.value);
	};

	return <SimpleSelect nameSelect="Count" label="Count" value={value} handleChange={handleChange} list={COUNT_ITEM} />;
};
