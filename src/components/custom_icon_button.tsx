import React from 'react';
import IconButton from '@mui/material/IconButton';

// プロパティの型定義
interface CustomIconButtonProps {
  backgroundImageUrl: string;
  onClick: () => void;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ backgroundImageUrl, onClick }) => {
  return (
    <IconButton
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 48,
        height: 48,
      }}
      onClick={onClick} // プロパティから受け取ったonClickハンドラを使用
    >
      {/* 子要素はここに配置 */}
    </IconButton>
  );
}

export default CustomIconButton;
