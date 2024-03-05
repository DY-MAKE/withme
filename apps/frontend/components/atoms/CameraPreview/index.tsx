'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/utils/cn';

interface CameraPreviewProps {
  className?: string;
}

export const CameraPreview = ({
  className,
}: CameraPreviewProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const stream: Promise<MediaStream> =
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
    const videoCurrent: HTMLVideoElement | null = videoRef.current;

    stream.then((s: MediaStream) => {
      if (videoCurrent) {
        videoCurrent.srcObject = s;
      }
    });

    return () => {
      if (videoCurrent) {
        videoCurrent.srcObject = null;
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      className={cn('pointer-events-none', className)}
    />
  );
};
