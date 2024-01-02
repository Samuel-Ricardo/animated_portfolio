import { ISidebarToggleButtonProps } from "@/@types/props/sidebar/toggle/button";
import { MotionPath } from "@/components/motion/svg/path.component";
import { MODULES } from "@/modules/app.factory";

export const ToggleButton = ({ setOpen }: ISidebarToggleButtonProps) => {
  const animations = MODULES.ANIMATION.MOTION.SVG.DRAWN();
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <MotionPath
          {...animations({})}
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <MotionPath
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <MotionPath
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
