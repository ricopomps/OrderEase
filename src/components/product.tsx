import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface ProducDataProps {
  title: string;
  description: string;
  thumbnail: ImageProps;
}

type ProductProps = TouchableOpacityProps & {
  data: ProducDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data: { title, description, thumbnail }, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4"
        {...rest}
      >
        <Image source={thumbnail} className="w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <Text className="text-slate-100 font-subtitle text-base flex-1">
            {title}
          </Text>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
