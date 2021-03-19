import React, {
  forwardRef,
  useImperativeHandle,
  useState
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import './style.scss'

const CustomModal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false)
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 0.9,
              transition: {
                duration: 0.1
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.1
              }
            }}
            className="modal-backdrop"
          />
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.2
              }
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.2
              }
            }}
            className="modal-content-wrapper"
          >
            <motion.div
              className="modal-content"
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 0.2
                }
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.2
                }
              }}
            >
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default CustomModal