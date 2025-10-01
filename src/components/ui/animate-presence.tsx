import { FC, ReactNode } from 'react';
import { AnimatePresence as FramerAnimatePresence } from 'framer-motion';

type AnimatePresenceProps = {
  children: ReactNode;
  mode?: "sync" | "wait" | "popLayout";
  initial?: boolean;
  onExitComplete?: () => void;
};

export const AnimatePresenceCustomWrapper: FC<AnimatePresenceProps> = ({
  children,
  mode = "sync",
  initial = false,
  onExitComplete,
}) => (
  <FramerAnimatePresence
    mode={mode}
    initial={initial}
    onExitComplete={onExitComplete}
  >
    {children}
  </FramerAnimatePresence>
);