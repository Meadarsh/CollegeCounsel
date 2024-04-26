import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { fDate } from 'src/utils/format-time';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function PostCard({ post}) {
  const {_id, path, title,subtitle, upload_time } = post;

  const renderAvatar = (
    <Avatar
      alt={'CC'}
      src={'/favicon/cc.png'}
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
      
      }}
    />
  );

  const renderTitle = (
    <Link className="w-full" to={`/blog/${post._id}`}><Typography
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height:20,
        overflow: 'hidden',
        textDecoration: 'underline',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        
      }}
    >
      {title}
    </Typography></Link>
  )
  const renderContent = (
    <Link
      color="inherit"
      variant="p"
      sx={{
        height: 30,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
      }}
    >
      {subtitle}
    </Link>
  );

  // const renderInfo = (
  //   <Stack
  //     direction="row"
  //     flexWrap="wrap"
  //     spacing={1.5}
  //     justifyContent="flex-end"
  //     sx={{
  //       mt: 3,
  //       color: 'text.disabled',
  //     }}
  //   >
  //     {[
  //       { number: comment, icon: 'eva:message-circle-fill' },
  //       { number: view, icon: 'eva:eye-fill' },
  //       { number: share, icon: 'eva:share-fill' },
  //     ].map((info, _index) => (
  //       <Stack
  //         key={_index}
  //         direction="row"
  //         sx={{
  //           ...((latestPostLarge || latestPost) && {
  //             opacity: 0.48,
  //             color: 'common.white',
  //           }),
  //         }}
  //       >
  //         <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
  //         <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
  //       </Stack>
  //     ))}
  //   </Stack>
  // );

  const renderCover = (
    <Link className="w-full" to={`/blog/${post._id}`}> <Box
      component="img"
      alt={title}
      src={path}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
    </Link>
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: 'text.disabled',
       
      }}
    >
      {fDate(upload_time)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        
      }}
    />
  );

  return (
    <Grid xs={12} sm={ 6} md={ 3}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 3 / 4)',
            
          }}
        >
          {renderShape}

          {renderAvatar}

          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
          }}
        >
          {renderDate}

          {renderTitle}
          {renderContent}
          {/* {renderInfo} */}
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
