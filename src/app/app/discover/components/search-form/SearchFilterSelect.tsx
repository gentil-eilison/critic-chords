import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SearchFilterSelectOption = {
  value: string;
  text: string;
};

interface SearchFilterSelectProps {
  options: SearchFilterSelectOption[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SearchFilterSelect({
  options,
  placeholder,
  value,
  onChange,
}: SearchFilterSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
        <SelectContent className="bg-gray-800 border-gray-700">
          {options.map((option, index) => (
            <SelectItem
              className="hover:text-black hover:bg-white"
              value={option.value}
              key={index}
            >
              {option.text}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
}
