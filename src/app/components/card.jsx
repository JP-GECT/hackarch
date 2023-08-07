import React from "react";
import ReactDOM from "react-dom";
import { motion, useAnimation, transform } from "framer-motion";

const normalShadow = "0px 0px 30px rgba(0, 0, 0, 0.2)";

const style = {
  backgroundImage:"url(https://cdn.glitch.me/071e5391-90f7-476b-b96c-1f51f7106b0c/video-cover-new.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  boxShadow: normalShadow,
  border: "15px solid white"
};

function LogoCard() {
  const anim = useAnimation();
  const cardWidth = 500;
  const cardHeight = (cardWidth * 1080) / 1920;

  let animationFrameId = null; 

  function handleMouseMove(event) {
    cancelAnimationFrame(animationFrameId); // Cancel any pending animation frame
    animationFrameId = requestAnimationFrame(() => {
      let x = event.clientX;
      let y = event.clientY;

      let offsetX = x - window.innerWidth / 2;
      let offsetY = y - window.innerHeight / 2;

      const shadowx = transform(offsetX, [-250, 0, 250], [25, 0, -25]);
      const shadowy = transform(offsetY, [-250, 0, 250], [25, 0, -25]);

      anim.start({
        rotateX: -offsetY / 12,
        rotateY: offsetX / 12,
        scale: 1.2,
        boxShadow: `${shadowx}px ${shadowy}px 40px rgba(0,0,0,0.5)`,
        transition: { type: "spring", mass: 0.3, velocity: 0 }
      });
    });
  }

  function handleMouseLeave() {
    anim.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: normalShadow
    })
  }

  function handleMouseOver(event) {
    anim.start({
      scale: 1.1
    })
  }

  return (
    <div className="app">
       <motion.img
      src="https://cdn.glitch.me/071e5391-90f7-476b-b96c-1f51f7106b0c/video-cover-new.png"
          center={true}
          style={style}
          animate={anim}
          width={cardWidth}
          height={cardHeight}
          borderRadius={20}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
          
      />
      <motion.div
        perspective={800}
        center={true}
        width={cardWidth}
        height={cardHeight}
        background="transparent"
      />
     
      
    </div>
  );
}

export default LogoCard;
