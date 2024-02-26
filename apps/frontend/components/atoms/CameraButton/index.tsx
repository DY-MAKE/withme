import { cn } from '@/utils/cn';

type CameraButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const CameraButton = ({
  className,
  ...rest
}: CameraButtonProps) => {
  return (
    <button
      className={cn('h-16 w-16 rounded-full bg-white', className)}
      {...rest}
    />
  );
};
