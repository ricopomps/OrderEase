import { cn } from "@/utils/utils";
import { Pressable, PressableProps, Text } from "react-native";
type CategoryButtonProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export default function CategoryButton({
  title,
  isSelected,
  ...rest
}: CategoryButtonProps) {
  return (
    <Pressable
      className={cn(
        "bg-slate-800 px-4 justify-center rounded-md h-10",
        isSelected && "border-2 border-lime-300"
      )}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
