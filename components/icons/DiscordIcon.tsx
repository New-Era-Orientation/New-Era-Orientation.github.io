import React from 'react';

// Định nghĩa props để thêm size và color tùy chỉnh
interface DiscordIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string; // Kích thước (ví dụ: 24, "32px")
  color?: string; // Màu sắc cho icon
}

/**
 * Component React để hiển thị Icon Discord (Logo Wumpus).
 * @param {DiscordIconProps} props - Các props như size, color, và các props SVG tiêu chuẩn.
 */
const DiscordIcon: React.FC<DiscordIconProps> = ({ size = 24, color = '#5865F2', ...props }) => {
  // Màu xanh tím chính thức của Discord
  const discordPurple = '#5865F2'; 

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // ViewBox tiêu chuẩn cho logo Discord
      viewBox="0 0 127 127" 
      width={size}
      height={size}
      // Sử dụng prop 'color' cho màu nền, mặc định là màu tím Discord
      fill={color}
      {...props}
    >
      {/* Mã path chính thức của logo Discord (Wumpus) 
        Phần này đại diện cho hình dạng tay cầm chơi game/mặt Wumpus
      */}
      <path 
        d="M107.72,0H19.28A19.29,19.29,0,0,0,0,19.28V90.47a19.29,19.29,0,0,0,19.28,19.28h6.43V127L43.89,109.75h63.83A19.29,19.29,0,0,0,127,90.47V19.28A19.29,19.29,0,0,0,107.72,0ZM85.58,74.5c-4.32,4.32-9.45,7.18-15.08,8.51-1.46.35-3.08.35-4.54,0-5.63-1.33-10.76-4.19-15.08-8.51-4.32-4.32-7.18-9.45-8.51-15.08-.35-1.46-.35-3.08,0-4.54,1.33-5.63,4.19-10.76,8.51-15.08,4.32-4.32,9.45-7.18,15.08-8.51,1.46-.35,3.08-.35,4.54,0,5.63,1.33,10.76,4.19,15.08,8.51,4.32,4.32,7.18,9.45,8.51,15.08.35,1.46.35,3.08,0,4.54C92.76,65.05,89.9,70.18,85.58,74.5Z"
      />
      
      {/* Mắt trái (Màu trắng) */}
      <circle fill="#FFFFFF" cx="50.81" cy="50.64" r="7.42"/>
      
      {/* Mắt phải (Màu trắng) */}
      <circle fill="#FFFFFF" cx="76.19" cy="50.64" r="7.42"/>
    </svg>
  );
};

export default DiscordIcon;