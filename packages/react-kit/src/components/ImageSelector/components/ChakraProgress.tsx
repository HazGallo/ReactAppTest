import React, { useEffect, useState } from 'react';
import { Progress, ProgressProps } from '@chakra-ui/react';

interface ChakraProgressProps extends ProgressProps {
  duration: number; // duration in milliseconds
}

const ChakraProgress: React.FC<ChakraProgressProps> = ({
  duration,
  ...rest
}) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progressRatio = elapsedTime / duration;

      if (elapsedTime >= duration) {
        setProgress(100);
      } else {
        // Applies a speedup to progress using a tween function
        const easingValue = Math.pow(progressRatio, 2); // Set the exponent according to the desired acceleration
        const newProgress = Math.floor(easingValue * 100);
        setProgress(newProgress);
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [duration]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsCompleted(true);
      }, 200);
    }
  }, [progress]);

  const opacity = isCompleted ? 0 : 1;
  const translateY = isCompleted ? '15px' : '0';

  const progressBarStyles = {
    opacity: opacity,
    transform: `translateY(${translateY})`,
    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
  };

  const getColorScheme = (progress: number) => {
    if (progress < 70) {
      return 'whiteAlpha';
    } else if (progress < 80) {
      return 'neWhite';
    } else {
      return 'neWhite';
    }
  };

  return (
    <Progress
      {...rest}
      value={progress}
      style={progressBarStyles}
      colorScheme={getColorScheme(progress)}
    />
  );
};

export default ChakraProgress;
