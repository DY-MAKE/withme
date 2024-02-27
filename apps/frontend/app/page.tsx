import { CameraButton } from '@/components/atoms/CameraButton';
import { CameraPreview } from '@/components/atoms/CameraPreview';
import { Card } from '@/components/atoms/Card';
import { cn } from '@/utils/cn';

export default function Home() {
  return (
    <main>
      <CameraPreview
        className={cn(
          'absolute -z-10 min-h-full min-w-full',
          'bg-zinc-800',
        )}
      />
      <div
        className={cn(
          'absolute bottom-0 w-full p-8',
          'flex flex-col items-center gap-6',
        )}
      >
        <Card className="min-w-64">
          남자가 책상에 앉아 열심히 개발중이에요.
        </Card>
        <CameraButton />
      </div>
    </main>
  );
}
