import * as React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

export const Canvas: React.FC<{ text: string }> = ({ text }) => {
  const textRef = React.useRef<Text>(null);

  return (
    <Stage width={window.innerWidth / 2} height={window.innerHeight / 2}>
      <Layer>
        <Rect
          width={window.innerWidth / 2}
          height={window.innerHeight / 2}
          fill="lightgray"
        />
        <Text
          width={window.innerWidth / 2}
          height={window.innerHeight / 2}
          text={text}
          fontSize={48}
          ref={textRef}
        />
      </Layer>
    </Stage>
  );
};
