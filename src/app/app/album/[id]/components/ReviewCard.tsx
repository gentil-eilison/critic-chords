import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReviewForm from "./ReviewForm";

export default function ReviewCard() {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <CardTitle>Rate This Album</CardTitle>
      </CardHeader>
      <CardContent>
        <ReviewForm />
      </CardContent>
    </Card>
  );
}
