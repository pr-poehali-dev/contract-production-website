import { icons, LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
}

const Icon = ({ name, fallback, ...props }: IconProps) => {
  const LucideIcon =
    icons[name] || (fallback ? icons[fallback] : icons.CircleAlert);

  return <LucideIcon {...props} />;
};

export default Icon;
