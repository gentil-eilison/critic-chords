import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";

type SearchFilterSelectOption = {
    value: string;
    text: string;
}

interface SearchFilterSelectProps {
    options: SearchFilterSelectOption[];
    placeholder: string;
}

export default function SearchFilterSelect(
    { options, placeholder }: SearchFilterSelectProps
) {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
                <SelectContent className="bg-gray-800 border-gray-700">
                    { options.map((option, index) => (
                        <SelectItem
                            className="hover:text-black hover:bg-white"
                            value={option.value}
                            key={index}
                        >
                            { option.text }
                        </SelectItem>
                    )) }
                </SelectContent>
            </SelectTrigger>
        </Select>
    );
}