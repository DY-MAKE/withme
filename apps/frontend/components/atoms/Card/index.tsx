import { cn } from '@/utils/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, children }: CardProps) => {
  return (
    <div className={cn('rounded bg-white p-2', className)}>
      {children}
    </div>
  );
};
