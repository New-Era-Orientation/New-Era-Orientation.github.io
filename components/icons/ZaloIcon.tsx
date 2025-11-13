import React from 'react';

// Định nghĩa props để thêm size và color tùy chỉnh
interface ZaloIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string; // Cho phép cả số (ví dụ: 24) và chuỗi (ví dụ: "100%")
  color?: string; // Màu sắc cho icon
}

/**
 * Component React để hiển thị Icon Zalo.
 * @param {ZaloIconProps} props - Các props như size, color, và các props SVG tiêu chuẩn.
 */
const ZaloIcon: React.FC<ZaloIconProps> = ({ size = 24, color = '#0068FF', ...props }) => {
  // Màu xanh dương/tím là màu thường thấy trong icon Zalo
  const zaloBlue = '#0068FF'; 
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // ViewBox cố định, giữ tỷ lệ 1:1
      viewBox="0 0 48 48"
      // Sử dụng prop 'size' cho width và height
      width={size}
      height={size}
      // Màu mặc định có thể được điều chỉnh qua CSS hoặc props 'color'
      fill="currentColor" 
      {...props} // Truyền tất cả props còn lại (className, onClick, v.v.)
    >
      {/* 1. Nền hình tròn màu Zalo Blue (hoặc màu được truyền vào) */}
      <path
        // Ưu tiên sử dụng màu từ props nếu được cung cấp, nếu không dùng màu Zalo Blue mặc định
        fill={color !== '#0068FF' && color !== 'currentColor' ? color : zaloBlue}
        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
      />
      
      {/* 2. Các chi tiết bên trong (Màu trắng) */}
      <path
        fill="#FFFFFF"
        d="M33.93,22.253c-1.156,0-2.094,0.938-2.094,2.094c0,1.156,0.938,2.094,2.094,2.094s2.094-0.938,2.094-2.094C36.023,23.191,35.085,22.253,33.93,22.253z"
      />
      <path
        fill="#FFFFFF"
        d="M17.002,22.253c-1.156,0-2.094,0.938-2.094,2.094c0,1.156,0.938,2.094,2.094,2.094c1.156,0,2.094-0.938,2.094-2.094C19.096,23.191,18.158,22.253,17.002,22.253z"
      />
      <path
        fill="#FFFFFF"
        d="M34,29H14c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20c1.104,0,2-0.896,2-2C36,29.896,35.104,29,34,29z"
      />
      <path
        fill="#FFFFFF"
        d="M24.84,13.018c-0.493,0-0.962,0.181-1.328,0.509l-4.522,4.026c-0.28,0.249-0.444,0.61-0.444,0.999v0.003h12.986v-0.003c0-0.389-0.164-0.75-0.444-0.999l-4.522-4.026C25.802,13.199,25.333,13.018,24.84,13.018z"
      />
    </svg>
  );
};

export default ZaloIcon;