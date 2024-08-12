import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function GaleryImage (props) {
  return (
    <>  <Lightbox
      open={props.advancedExampleOpen}
      close={() => props.setAdvancedExampleOpen(false)}
      slides={props.advancedSlides}
      plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        />
    </>
  );
}
