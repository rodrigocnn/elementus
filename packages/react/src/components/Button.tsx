import React from "react";
import { colors, spacing, fonts } from "@elementus/tokens";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colors.primary,
        color: "white",
        padding: `${spacing.small} ${spacing.medium}`,
        fontFamily: fonts.body,
        border: `1px solid ${colors.border}`,
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = colors.secondary)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = colors.primary)
      }
    >
      {label}
    </button>
  );
};

export default Button;
