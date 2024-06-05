import { MotionConfig, motion } from "framer-motion"

const Button = ({
  label,
  iconComponent,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  clickEvent
}) => {
  return (
    <MotionConfig
    transition={{
      duration: '0.125',
      ease: 'easeInOut'
    }}
    >
      <motion.button className={`flex justify-center items-center gap-1 sm:gap-2 px-4 py-3 sm:px-6 sm:py-3 font-opensans text-base sm:text-lg leading-none capitalize font-semibold
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-primary text-text"
      } rounded-full ${fullWidth && "w-full"}`}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
        rotate: "2.5deg",
      }}
      onClick={clickEvent}
      >
        {label}
        {iconComponent}
      </motion.button>
    </MotionConfig>
  )
}

export default Button