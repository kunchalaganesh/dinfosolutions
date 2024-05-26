import { Card, Grid, Button, Typography, Box } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'

const Home = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <Box>
      <Grid container spacing={12}>
        <Grid item xs={2} sm={2}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Button variant='contained'>Primary</Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>Primary</Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>Primary</Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>Primary</Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>Primary</Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>Primary</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} sm={5}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Typography variant='h2'>A Unified Solution for All Your Business Needs</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>
                Our experienced team is here to guide your ideas and goals along the right path. We provide support,
                understanding, suggestions, development, and unwavering companionship throughout the journey.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} sm={2}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <div className='embla__container' ref={emblaRef}>
                <div className='embla__slide'>
                  <img src='your-image-1.jpg' alt='Slide 1' />
                </div>
                <div className='embla__slide'>
                  <img src='your-image-2.jpg' alt='Slide 2' />
                </div>
                <div className='embla__slide'>
                  <img src='your-image-3.jpg' alt='Slide 3' />
                </div>
              </div>
              l
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box>
        <Typography variant='h2'>A Unified Solution for All Your Business Needs</Typography>

        <Card>
          <Typography variant='h2'>A Unified Solution for All Your Business Needs</Typography>
        </Card>

        <Card>
          <Typography variant='h2'>A Unified Solution for All Your Business Needs</Typography>
        </Card>

        <Card>
          <Typography variant='h2'>A Unified Solution for All Your Business Needs</Typography>
        </Card>
        <Typography variant='h2'>Our Solution</Typography>

        <Card></Card>

        <Card></Card>

        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Box>
    </Box>
  )
}

export default Home
