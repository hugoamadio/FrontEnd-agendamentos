import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import useMediaQuery from '@mui/material/useMediaQuery';

function ArrowIcon() {
  const isSmallScreen = useMediaQuery('(min-width:700px)');

  return (
    <TrendingFlatIcon 
      fontSize='large' 
      style={{ transform: isSmallScreen ? 'none' : 'rotate(90deg)' }} 
    />
  );
}

export default ArrowIcon;