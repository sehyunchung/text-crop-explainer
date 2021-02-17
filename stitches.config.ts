import { createStyled } from "@stitches/react";

export const { css } = createStyled({
  utils: {
    borderX: (config) => (value) => ({
      border: `1px solid ${value}`,
      borderLeft: 0,
      borderRight: 0
    })
  }
});
