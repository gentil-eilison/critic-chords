interface StepProps {
    number: number;
    title: string;
    description: string;
}

export default function Step({ number, title, description }: StepProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="bg-green-500 rounded-full text-black w-24 h-24 text-center flex items-center justify-center font-bold">
                { number }
            </p>
            <p className="text-white font-bold">{ title }</p>
            <p className="text-gray-300 text-center">{ description }</p>
        </div>
    );
}