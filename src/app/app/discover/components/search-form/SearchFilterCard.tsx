import { Card, CardContent } from "@/components/ui/card";
import SearchFilterForm from "./SearchFilterForm";

export default function SearchFilterCard() {
    return (
        <Card className="bg-gray-800/80 border-gray-800">
            <CardContent>
                <SearchFilterForm />
            </CardContent>
        </Card>
    );
}