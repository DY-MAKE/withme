import { cn } from '@/utils/cn';

type CameraPreviewProps = React.HTMLAttributes<HTMLVideoElement>;

export const CameraPreview = ({
  className,
  ...args
}: CameraPreviewProps) => {
  return <video className={cn(className)} {...args} />;
};
